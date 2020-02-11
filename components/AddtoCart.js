import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';
import Link from 'next/link';


const BUTTON = styled.button`

    background-color: #c0670d;
    border: none;
    color: white;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;

`

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id,
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading,error }) => (
          <div>
            {loading && (<div className="loading"></div>)}
            {error && (<Link href="/login"><a>Please Sign before adding to cart.</a></Link>)}
            <BUTTON  disabled={loading} onClick={addToCart}>
              Add{loading && 'ing'} To Cart 🛒
           </BUTTON>
          </div>
        )}
      </Mutation>
    );
  }
}
export default AddToCart;
export { ADD_TO_CART_MUTATION };
