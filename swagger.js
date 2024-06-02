const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
    version: '1.0.0', // Add version for clarity
  },
  host: 'localhost:5000',
  basePath: '/api', // Set the base path for grouped endpoints
};

const outputFile = './swagger-output.json';
const routes = ['./router/index.js']; // Point to the router file

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('./index.js'); // Your project's root file
});
