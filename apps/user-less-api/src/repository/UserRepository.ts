import dynamoDb from '../configuration/DatabaseConfiguration';
import { v1 } from 'uuid';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { IUser, IUserCriteria, IPageInfo, IUserPage } from '../domain';
import { getPage } from './pagination-util';

export const UserTableName = 'User';
export const UserTable = { TableName: UserTableName };

/**
 * Build {@link DocumentClient#GetItemInput} "by id" query args.
 * @param userId the user id
 */
const byId = (userId: string): DocumentClient.GetItemInput =>
  ({ ...UserTable, Key: { id: userId } });

/**
 * Build {@link DocumentClient#PutItemInput} "save or update" query args.
 * @param userInput the user data to save or update
 * @param userId the user id to update.
 */
const saveOrUpdate = (userInput: IUser, userId?: string):
  DocumentClient.PutItemInput => {
  const id = userId == null ?  v1() : userId;
  const now = new Date().toISOString();
  const dob = userInput.dob.toISOString();

  return {
    ...UserTable,
    Item: {
      ...userInput,
      id,
      dob,
      createdAt: now,
      updatedAt: now
    }
  };
};

const criteriaExists = (criteria: IUserCriteria) => criteria && criteria.name

export const nameFilter = (user: IUser, criteria?: IUserCriteria) => {
  if (!criteriaExists(criteria)) {
    return true;
  } else {
    const match = new RegExp(`^${criteria.name}.*$`, 'i')

    return user.name.match(match)
  }
}


/**
 * Repository interface for {@link User} CRUD methods
 */
export interface UserRepository {
  findAll(pageInfo: IPageInfo, criteria?: IUserCriteria): Promise<IUserPage>

  findOne(userId: string): Promise<IUser | undefined>

  // TODO Id deprecated
  save(user: IUser, userId?: string): Promise<IUser>

  delete(userId: string): Promise<void>;
}

/**
 * Default {@link UserRepository} implementation.
 */
export const userRepository: UserRepository = new (class implements UserRepository {

  // TODO - Tech Debt - remove `any`
  // TODO - Tech Debt - user query perf
  // TODO - Tech Debt - In-memory filtering
  async findAll(pageInfo: IPageInfo, criteria?: IUserCriteria): Promise<IUserPage> {
    const result = await dynamoDb.scan(UserTable).promise();

    const filtered = (result.Items as IUser[])
      .filter(u => nameFilter(u, criteria))

    console.warn(`Got: ${filtered.length} items`)
    const { items, cursor } = getPage(filtered, pageInfo);
    return {
      users: items,
      cursor: `${cursor}`
    };
  }

  // TODO - Tech Debt - remove `any`
  async findOne(id: string): Promise<IUser | undefined> {
    const params = byId(id);
    const r = await dynamoDb.get(params).promise();
    return r.Item as any;
  }

  async save(userInput: IUser, userId?: string): Promise<IUser> {
    try {
      const params = saveOrUpdate(userInput, userId);
      await dynamoDb.put(params).promise();
      const saved = await this.findOne(params.Item.id);
      return saved;
    } catch ( e ) {
      console.error(`Error saving ${userId}`)
      console.error(`${e.message}`)
    }
  }

  async delete(id: string): Promise<void> {
    const params = byId(id);
    await dynamoDb.delete(params).promise();
  }

})();
