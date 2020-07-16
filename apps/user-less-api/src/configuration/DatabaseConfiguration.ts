import * as AWS from 'aws-sdk';

const dynamodbOfflineOptions = {
  region: 'localhost',
  endpoint: 'http://localhost:8000'
};

const isOffline = () => process.env.IS_OFFLINE;

if (isOffline()) {
  console.warn(`Running in offline mode!`);
  AWS.config.update({ accessKeyId: 'localAccessKey', secretAccessKey: 'localSecretAccessKey', region: 'localRegion' });
} else {
  console.warn(`Running in online mode!`);
}

const dynamoDb = isOffline() ? new AWS.DynamoDB.DocumentClient(dynamodbOfflineOptions) : new AWS.DynamoDB.DocumentClient();

export default dynamoDb;
