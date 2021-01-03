import { gql } from 'apollo-boost';

export const AUTHORIZE_USER = gql`
  mutation Authorize($input: AuthorizeInput) {
    authorize(credentials: $input) {
      accessToken
    }
  }
`;