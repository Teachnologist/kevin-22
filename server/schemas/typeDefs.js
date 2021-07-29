const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Book {
        _id: String
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
    }

    input SaveBookIn {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String

    }

    type Query {
        me: User
    }

    type Auth {
        token: String!
        user: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SaveBookIn): User
        removeBook(bookId: String!): User

    }
`

module.exports = typeDefs