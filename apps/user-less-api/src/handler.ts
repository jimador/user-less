import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-lambda';
import { buildSchemaSync } from 'type-graphql';
import * as path from 'path';
import { ISODateScalar } from './domain';
import { UserResolver } from './resolver/UserResolver';

const server = new ApolloServer({
  schema:  buildSchemaSync({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve('/tmp', 'schema.graphql'),
    validate: false,
    scalarsMap: [{ type: Date, scalar: ISODateScalar }]
  })
});

export const graphql = server.createHandler();
