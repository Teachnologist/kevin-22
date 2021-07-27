const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Book {
        bookId: String!
        authors: [Author]
        description: String!
        title: String! 
        img: String!
        link: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Query {
        me: [User]
    }

    type Auth {
        token: String!
        user: [User]
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!) Auth
        saveBook(authors:[Author], description: String!, title: String!, bookId: String!, image: String!, link: String!) User
        removeBook(bookId: String!) User

    }
`

module.exports = typeDefs