const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts Api'
  },
  host: 'https://web-services-mdu8.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);


// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//    await import('./index.js');
//  });