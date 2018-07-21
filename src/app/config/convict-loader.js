const convict = require('convict');
const dotenv = require('dotenv');

dotenv.config();

const config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test', 'local', 'stage'],
    default: 'local',
    env: 'NODE_ENV',
  },
  api: {
    doc: 'The applicaton api.',
    format: String,
    default: 'localhost',
    env: 'API',
  },
});

// Perform validation
config.validate({ allowed: 'strict' });

module.exports = () => {
  return { code: 'module.exports = ' + JSON.stringify(config.getProperties()) };
};
