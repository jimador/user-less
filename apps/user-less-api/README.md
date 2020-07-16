## User Management API


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
sls dynamodb start 
```
This will start a local DynamoDB instance (via serverless) running on port 8000 

```bash
nx serve user-management-api --port=5555
```
This will start a local instance of the user-management-api lambda running on port 5555

#### Automated AWS Deployment
Automated AWS deployments are provided via Serverless. Run `yarn nx user-management-api:deploy` after 
setting [up AWS credentials](https://www.serverless.com/framework/docs/providers/aws/guide/deploying/) to deploy the user-management-api to AWS lambda, a DynamoDB instance with the 
User table, and an AWS gateway for communication with the GQL API.

#### Destroy
run `yarn nx user-management-api:destroy` to tear down your the user-management-api AWS environment created above.
 
## GraphQL Schema

The GQL schema can be found [here](./src/graphql/schema.graphql). The TS API is built with 
[TypeGraphQL](https://typegraphql.com/) and then the schema is generated from the TypeScript types. 


**NOTE: All deployments (locally and in AWS) are configurable with a dev || production flag.**

To serve the `production` profile locally, run:
 
```bash
nx serve user-management-api:prod --port=5555
```


---
##### This library was generated with [Nx](https://nx.dev).
