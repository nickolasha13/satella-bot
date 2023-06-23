import { Keys } from '../types';
const keys: Keys = {
    clientToken: process.env.CLIENT_TOKEN ?? 'nil',
    testGuildId: process.env.TEST_GUILD ?? 'nil'
}

if (Object.values(keys).includes('nil')) {
    throw new Error('One or more keys are missing from the .env file.')
}
export default keys;