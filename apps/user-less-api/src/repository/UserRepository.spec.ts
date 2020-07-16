import { nameFilter } from './UserRepository';
import { usersGen } from '../../test/user.fakes';

describe('UserRepositoryTest', () => {
  it('should filter non-herby', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u, {name: 'herby'}))
    expect(filtered.length).toStrictEqual(1)
    expect('herby').toStrictEqual(filtered[0].name)
  });

  it('should return all for no criteria', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u))
    expect(filtered.length).toStrictEqual(2)

  });

  it('should return all for no name', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u, {}))
    expect(filtered.length).toStrictEqual(2)
  });

  it('should filter all when none match', () => {
    const [first] = usersGen(1)
    const aUser = {...first, name: 'herby'}

    const testList = [first, aUser]
    const filtered = testList.filter(u => nameFilter(u, {name: '90fred09'}))
    expect(filtered.length).toStrictEqual(0)
  });
});
