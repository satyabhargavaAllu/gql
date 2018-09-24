var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    test : String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  test: () => {
    return 'testing world!';
  }
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello,test }', root).then((response) => {
  console.log(response);
});


//schems --- just skeleton of function
//rootroot -- define the completet logic in function
//graphQl -- trigger those functions  using the schemas,root and function definations