import 'reflect-metadata';
import * as fs from 'fs';
import * as path from 'path';

import { emitSchemaDefinitionFile, buildSchemaSync } from 'type-graphql';
import { UserResolver } from '../src/resolver/UserResolver';
import { ISODateScalar } from '../src/domain';

const createSchema = () => buildSchemaSync({
  resolvers: [UserResolver],
  // emitSchemaFile: path.resolve('/tmp', 'schema.graphql'),
  validate: false,
  scalarsMap: [{ type: Date, scalar: ISODateScalar }]
})

const TEST_DIR = __dirname

describe("Emitting schema definition file", () => {

  it("should write file with schema SDL successfully", async () => {
    const targetPath = path.join(TEST_DIR,'..','src','graphql',"schema.graphql");
    const schema = createSchema()
    await emitSchemaDefinitionFile(targetPath, schema);
    expect(fs.existsSync(targetPath)).toEqual(true);
  });

});
