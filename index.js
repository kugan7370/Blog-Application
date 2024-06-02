const express = require('express');
const router = require('./router/index.js');
const dbConnection = require('./config/database.js');
const errorHandler = require('./middleware/errorHandler.js');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());



app.use('/api', router);


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(errorHandler);


app.listen(5000, () => {
    console.log('Server is running on port 3000');

    dbConnection();

    }
);