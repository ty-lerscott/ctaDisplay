const fs = require('fs');
const express = require("express");
const bodyParser = require('body-parser');
const graphqlHTTP = require("express-graphql");
const dotenv = require("dotenv");
const expressPlayground = require("graphql-playground-middleware-express").default;
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

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

const {version} = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf-8'));

if (process.env.ENVIRONMENT !== 'DEVELOPMENT'){
    executeWeather();
    executeUnsplash();
    executeSeatGeek();
    executeBusArrivals();
    executeTrainArrivals();
    executeServiceAlerts();
} else {
    console.warn('NO POLLING IN DEVELOPMENT');
}

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

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
    .use(morgan('combined', {
        stream: accessLogStream
    }))
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
    .use('*/assets', express.static(path.resolve(__dirname, `../../client/assets`)))
    .use('*/js', express.static(path.resolve(__dirname, `../../dist/${version}/client`)))
    .use('/report', (req,res) => {
        res.sendFile(path.resolve(__dirname, `../../dist/${version}/client/report.html`));
    })
	.use(createHtml)
    .listen(process.env.HTTP_PORT, '0.0.0.0', () =>
        console.log(`Now browse to localhost:${process.env.HTTP_PORT}`)
    );


