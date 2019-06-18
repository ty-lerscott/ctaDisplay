const graphql  = require("graphql");
const {object} = require('./baseTypes');
const Schemas  = require("./Schemas");

const {GraphQLSchema} = graphql;

module.exports = new GraphQLSchema({
    query: object({
        name: "RootQueryType",
        fields: Schemas
    })
});
