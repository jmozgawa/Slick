export default `

  type Message {
    id: ID!
    handle: String!
    content: String!
    timestamp: Int!
  }

  type Channel {
    _id: ID!
    name: String!
    messages: [Message]!
  }

  type Query {
    channels: [Channel]
    channel(name: String!): Channel
  }
  
  type Mutation {
    post(channel: String!, message: String!): Message!
    createChannel(name: String!): Channel!
    removeChannel(name: String!): Boolean
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
`;