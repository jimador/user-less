## User-Less API

### About

TypeScript/NodeJS AWS lambda GraphQL API for User Management.

## Serverless

### Local Development

#### Prerequisites

- [ ] Serverless [CLI](https://serverless.com/framework/docs/getting-started/)
- [ ] Local DynamoDB install https://www.serverless.com/plugins/serverless-dynamodb-local
- [ ] Amazon AWS account and `awscli` installed and configured: <https://aws.amazon.com/getting-started/>

#### Running locally

```bash
cd apps/user-less-api && sls offline start --httpPort=5555
```

This will start a local instance of the user-less-api lambda, and a local dynamodb instance.

- GraphQl: http://localhost:5555/dev/graphql
- DynamoDB: http://localhost:8000/shell

#### Automated AWS Deployment

Automated AWS deployments are provided via Serverless. Run `yarn nx user-less-api:deploy` after
setting [up AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/deploying/) to deploy the user-less-api to AWS lambda, a DynamoDB instance with the
User table, and an AWS gateway for communication with the GQL API.

#### Destroy

run `yarn nx user-less-api:destroy` to tear down your the user-less-api AWS environment created above.

## GraphQL Schema

The GQL schema can be found [here](src/graphql/schema.graphql). The TS API is built with
[TypeGraphQL](https://typegraphql.com/) and then the schema is generated from the TypeScript types.

**NOTE: All deployments (locally and in AWS) are configurable with a dev || production flag.**

To serve the `production` profile locally, run:

```bash
yarn nx serve user-less-api:prod --port=5555
```
