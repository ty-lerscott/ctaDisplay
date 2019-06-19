
const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const graphqlHTTP = require("express-graphql");
const dotenv = require("dotenv");
const expressPlayground = require("graphql-playground-middleware-express").default;
const schema = require("./schemas/RootQuery");
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();

const axios = require('axios');
const CTAENDPOINTS = require('./ctaEndpoints');

const directions = require('./utils/directions');

app
    .use(cors({
        credentials: true,
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'OPTIONS'],
        allowedHeaders: ['X-Requested-With', 'X-HTTP-Method-Override', 'Content-Type', 'Accept']
    }))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:true}))
    .use(cookieParser())
    .use(compression())
    .use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
    .use('/playground', expressPlayground({ endpoint: "/graphql" }))
    .use('/test', (req,res) => {
        axios.get(CTAENDPOINTS.getBusStop({
            route: 36,
            direction: 'Southbound'
        })).then(({data}) => {
            const {stops} = data['bustime-response'];
            const ourStop = stops.find(stop => (/Broadway\W+Sunnyside/i).test(stop.stpnm));

            if (ourStop) {
                axios.get(CTAENDPOINTS.getBusArrivals({
                    stop: ourStop.stpid,
                    route: 36
                })).then(({data}) => {
                    const predictions = data['bustime-response'].prd;

                    console.warn(predictions);
                    res.json(predictions);
                })
            } else {
                res.sendStatus(404);
            }

        });
    })
    .use("/graphql",
        bodyParser.json(),
        bodyParser.urlencoded({extended:true}),
        cookieParser(),
        graphqlHTTP((req, res) => {
            return {
                schema,
                context: {req, res}
            }
        }
    ))
    .listen(process.env.HTTP_PORT, () =>
        console.log(`Now browse to localhost:${process.env.HTTP_PORT}/graphql`)
    );
