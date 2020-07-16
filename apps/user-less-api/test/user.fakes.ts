import * as f from 'factory.ts';
import * as faker from 'faker';

export const nameGen: () => f.Sync.Generator<string> = () => f.each(() => faker.helpers.userCard().name);
export const addressGen: () => f.Sync.Generator<string> = () => f.each(() => {
  const { city, street, zipcode } = faker.helpers.userCard().address;
  return `${street}, ${city}, ${zipcode}`;
});
export const descriptionGen: () => f.Sync.Generator<string> = () => f.each(() => faker.lorem.sentences(3));
export const dateGen: (days?: number) => f.Sync.Generator<Date> = (days = 1000) => f.each(() => faker.date.recent(days));
export const idGen: () => f.Sync.Generator<string> = () => f.each(() => faker.random.alphaNumeric(16));
export const latLngGen: () => f.Sync.Generator<{
  lat: string;
  lng: string;
}> = () => f.each(() => {
  const { lat, lng } = faker.helpers.userCard().address.geo;
  return {
    lat, lng
  };
});


export const usersGen = (count = 6) => f.Sync.makeFactory({
  id: nameGen(),
  address: addressGen(),
  createdAt: dateGen(),
  description: descriptionGen(),
  dob: dateGen(),
  name: nameGen(),
  updatedAt: new Date(),
  ...latLngGen().build(1)
}).buildList(count);
