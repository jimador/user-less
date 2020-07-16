import { GraphQLScalarTypeConfig } from 'graphql/type/definition';
import { GraphQLScalarType } from 'graphql';

const config: GraphQLScalarTypeConfig<Date | string, string> = ({
  name: 'IsoDateScalar',
  description: `An ISO Date string.`,
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    if (!value) {
      return null;
    } else if (value instanceof Date) {
      return value.toISOString();
    } else if (value && new Date(value)) {
      return value;
    } else {
      throw new Error(`Value: '${value}' is not a Date!`);
    }
  },
  parseLiteral(value) {
    if (value.kind === 'StringValue') {
      return new Date(value.value);
    }
    return null;
  }
});

export const ISODateScalar = new GraphQLScalarType(config);
