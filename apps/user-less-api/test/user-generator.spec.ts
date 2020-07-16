import * as jsonfile from 'jsonfile';

import * as path from 'path';

import { makeFactory } from 'factory.ts';
import { dateGen, descriptionGen, idGen, addressGen, nameGen, latLngGen } from './user.fakes';

const userSeedFileName = 'Users.json';

const userSeedPath = path.join(__dirname, '..', 'seed', userSeedFileName);

const createUser = () => {
  const { lat, lng } = latLngGen().build(1)
  const user = {
    id: idGen(),
    address: addressGen(),
    description: descriptionGen(),
    name: nameGen(),
    dob: dateGen(),
    createdAt: dateGen(),
    updatedAt: dateGen(10),
    lat,
    lng
  };
  return user
}

const genUsers = (count = 50) => {
  return makeFactory(createUser()).buildList(count);
};

describe('user data generator', () => {
  it('should generate data', () => {
    const data = genUsers();
    jsonfile.writeFileSync(userSeedPath, data);
  });
});
