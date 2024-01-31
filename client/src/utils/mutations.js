import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation Mutation(
    $authors: [String]!
    $title: String!
    $description: String!
    $bookId: String!
    $image: String!
    $link: String
  ) {
    saveBook(
      authors: $authors
      title: $title
      description: $description
      bookId: $bookId
      image: $image
      link: $link
    ) {
      username
      _id
      bookCount
      savedBooks {
        title
        description
        bookId
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation Mutation($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      _id
      savedBooks {
        title
        bookId
        description
      }
    }
  }
`;
