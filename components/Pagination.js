import React,{Fragment} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import { perPage } from '../config';
import styled from 'styled-components';

const Pagi = styled.div`
  display:flex;
  justify-content:center;
  div{

    a{
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border: 1px solid #ddd;
  }
  }
  
`

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => (
  <div style={{marginTop:'50px'}}>
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return null;
        if (error) return <p>Errorr...</p>;
        const count = data.itemsConnection.aggregate.count
        if(count < perPage) return null;
        const pages = Math.ceil(count / perPage);
        const page = props.page;
        console.log(page)
        return (
          <Fragment>
            <Head>
              <title>
                Huborte! — Page {page} of {pages}
              </title>
            </Head>
            <Pagi>
              <div>
                <Link
                  prefetch
                  href={{
                    pathname: '/',
                    query: { page: page - 1 },
                  }}
                >
                  <a className="prev" aria-disabled={page <= 1}>
                    &laquo;
                  </a>
                </Link>
                  
                <Link
                  prefetch
                  href={{
                    pathname: '/',
                    query: { page: page + 1 },
                  }}
                >
                  <a className="next" aria-disabled={page >= pages}>
                    &raquo;
                  </a>
                </Link>
              </div>
            </Pagi>
          </Fragment>
        );
      }}
    </Query>
    </div>
  );
  
  export default Pagination;