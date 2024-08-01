import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Post {
    id: ID!
    image: String
    description: String
    comment: [String]
    like: Int
  }

  type Query {
    posts: [Post]
  }

  input PostInput {
    image: String
    description: String
    comment: [String]
    like: Int
  }

  type Mutation {
    createPost(input: PostInput): Post
    deletePost(id: ID!): Post
    editPost(id: ID!, input: PostInput): Post
  }
`;
