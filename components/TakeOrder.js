import React from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import User, { CURRENT_USER_QUERY } from './User';

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION {
    createOrder {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney extends React.Component {
//   onToken = async (res, createOrder) => {
//     NProgress.start();
//     // manually call the mutation once we have the stripe token
//     const order = await createOrder({
//       variables: {
//         token: res.id,
//       },
//     }).catch(err => {
//       alert(err.message);
//     });
//     Router.push({
//       pathname: '/order',
//       query: { id: order.data.createOrder.id },
//     });
//   };
  render() {
    return (
      <User>
        {({ data, loading }) => {
          return(
              <>
              {this.props.children}
              </>
          )
        }}
      </User>
    );
  }
}

export default TakeMyMoney;
export { CREATE_ORDER_MUTATION };