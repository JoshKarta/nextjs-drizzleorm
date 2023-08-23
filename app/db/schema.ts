import { mysqlTable, serial, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { InferModel } from 'drizzle-orm';
// declaring enum in database
export const countries = mysqlTable('countries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
}, (countries) => ({
  nameIndex: uniqueIndex('name_idx').on(countries.name),
}));


export type Country = InferModel<typeof countries>;
export type newCountry = InferModel<typeof countries,"insert">;
// export const cities = mysqlTable('cities', {
//   id: serial('id').primaryKey(),
//   name: varchar('name', { length: 256 }),
//   countryId: int('country_id').references(() => countries.id),
//   popularity: mysqlEnum('popularity', ['unknown', 'known', 'popular']),
// });