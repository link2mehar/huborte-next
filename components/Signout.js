  
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link'
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => (
  <Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
    {signout => <a href="#" onClick={(e) => {e.preventDefault();signout()}}>Sign Out</a>}
  </Mutation>
);
export default Signout;