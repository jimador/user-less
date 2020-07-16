import * as TypeGraphQL from 'type-graphql';
import { Resolver, Query, Arg, Mutation, ObjectType, Field, InputType } from 'type-graphql';
import { userRepository } from '../repository/UserRepository';
import { IUser, IUserCriteria, IPageInfo, IUserPage } from '../domain';

@ObjectType()
class UserPage implements IUserPage {
  @Field((_type) => [User])
  users: User[];

  @Field((_type) => String)
  cursor: string;
}

@InputType('UserInput')
@ObjectType('User')
class User implements IUser {

  @Field((_type) => TypeGraphQL.ID)
  id: string;

  @Field((_type) => String)
  name: string;

  @Field((_type) => Date)
  dob: Date;

  @Field((_type) => String)
  address: string;

  @Field((_type) => String)
  lat: string;

  @Field((_type) => String)
  lng: string;

  @Field((_type) => String)
  description: string;

  @Field((_type) => Date)
  createdAt: Date;

  @Field((_type) => Date)
  updatedAt: Date;
}

@InputType()
class UserCriteria implements IUserCriteria {
  @Field((_type) => String)
  name: string;
}

@InputType()
class PageInfo implements IPageInfo {
  @Field((_type) => Number)
  limit: number;
  @Field(() => String,{ nullable: true } )
  cursor?: string;
}

/**
 * type-graphql {@link Resolver} for {@link User} data
 */
// TODO Auth
@Resolver(User)
export class UserResolver {
  constructor() {
  }

  @Query(_ => UserPage)
  async findAll(@Arg('pageInfo') pageInfo: PageInfo,
                @Arg('criteria', {nullable: true}) criteria?: UserCriteria): Promise<UserPage> {
    const result = await userRepository.findAll(pageInfo, criteria);
    return result as UserPage;
  }

  @Query(_ => User)
  async findOne(@Arg('id') id: string): Promise<User> {
    const result = await userRepository.findOne(id);
    return result;
  }

  @Mutation(_ => User)
  async addUser(@Arg('user') user: User): Promise<User> {
    const result = await userRepository.save(user);
    return result;
  }

  @Mutation(_ => User)
  async updateUser(@Arg('user') user: User): Promise<User> {
    const result = await userRepository.save(user, user.id);
    return result;
  }

  @Mutation(_ => Boolean)
  async deleteUser(@Arg('id') id: string): Promise<boolean> {
    await userRepository.delete(id);
    return true;
  }
}
