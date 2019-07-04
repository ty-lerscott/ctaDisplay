const express = require("express");
const bodyParser = require('body-parser');
const graphqlHTTP = require("express-graphql");
const dotenv = require("dotenv");
const expressPlayground = require("graphql-playground-middleware-express").default;
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
dotenv.config();

const app = express();

const schema = require("./schemas/RootQuery");
const createHtml = require('./utils/createHtml');

const {database} = require('../firebase/config');

const executeWeather      = require('./polling/weather');
const executeUnsplash     = require('./polling/unsplash');
const executeSeatGeek     = require('./polling/seatGeek');
const executeBusArrivals  = require('./polling/busArrivals');
const executeServiceAlerts= require('./polling/serviceAlerts');
const executeTrainArrivals= require('./polling/trainArrivals');

// executeWeather();
// executeUnsplash();
// executeSeatGeek();
// executeBusArrivals();
executeTrainArrivals();
// executeServiceAlerts();

app
    .use(cors({
        credentials: true,
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'OPTIONS'],
        allowedHeaders: ['X-Requested-With', 'X-HTTP-Method-Override', 'Content-Type', 'Accept']
    }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:true}))
    .use(compression())
    .use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
    .use('/playground', expressPlayground({ endpoint: "/graphql" }))
    .use("/graphql",
        bodyParser.json(),
        bodyParser.urlencoded({extended:true}),
        graphqlHTTP((req, res) => {
            return {
                schema,
                context: {req, res}
            }
        }
    ))
    .use('*/assets', express.static(path.resolve(__dirname, `../../public/assets`)))
    .use('*/js', express.static(path.resolve(__dirname, `../../public/js`)))
	.use(createHtml)
    .listen(process.env.HTTP_PORT, '0.0.0.0', () =>
        console.log(`Now browse to localhost:${process.env.HTTP_PORT}`)
    );


