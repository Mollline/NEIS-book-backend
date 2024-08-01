import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    fullName: String!
    email: String!
    password: String!
    avatar: String
    address: String
    paymentInfo: PaymentInfo
    favorites: [String]
  }

  type PaymentInfo {
    cardHolder: String!
    cardNumber: String!
    expirationDate: String!
    cvv: String!
  }

  type Query {
    getAllUsers: [User]
  }

  input PaymentInfoInput {
    cardHolder: String!
    cardNumber: String!
    expirationDate: String!
    cvv: String!
  }

  input CreateUserInput {
    fullName: String!
    email: String!
    password: String!
    avatar: String
    address: String
    paymentInfo: PaymentInfoInput
    favorites: [String]
  }

  input EditUserInput {
    fullName: String!
    email: String!
    password: String!
    avatar: String
    address: String
    paymentInfo: PaymentInfoInput
    favorites: [String]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    editUser(id: ID!, input: EditUserInput!): User
    deleteUser(id: ID!): User
  }
`;
