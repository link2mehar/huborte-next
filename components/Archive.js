import React, { Component } from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Pagination from './Pagination';
import {perPage} from '../config';
import styled from 'styled-components'
import Product from './Product'


const ProductWrapper = styled.div`

    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin:auto;
    @media (max-width:768px){
        flex-direction:column;
        justify-content: center;
        padding:25px;
    }`

const ArchiveWrapper = styled.div`
    margin:50px 0;
`



const ARCHIVE_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage},$catId: String ) {
    items(first: $first, skip: $skip, where:{categories:{slug:$catId}}) {
      id
      title
      regular_price
      description
      image
      largeImage
      slug
      categories{
          name
      }
    }
  }
`;

export default class Shop extends Component {
    
    render() {
       
        return (
            <ArchiveWrapper>
                <Query query={ARCHIVE_ITEMS_QUERY}

                    variables={{
                    skip: this.props.page * perPage - perPage,
                    catId: this.props.catId,
                    
                     }}
                     
                >
                    {({data,error,loading}) => {

                        if(loading) return <div className="loader"></div>;
                        
                        if(data.items.length < 1) {
                            return <ProductWrapper>
                                        <h3>No Items found</h3>
                                    </ProductWrapper>
                        }
                        
                        
                    return <ProductWrapper>{data.items.map(item=>(
                            
                                <Product key={item.id} item={item} />

                                ))}
                           </ProductWrapper>
                    }}
                </Query>
                <Pagination page={this.props.page}/>
            </ArchiveWrapper>
        )
    }
}
