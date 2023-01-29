// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BEHAVIOR, OBSERVATION, CLIENT } = initSchema(schema);

export {
  BEHAVIOR,
  OBSERVATION,
  CLIENT
};