import React, { Component } from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Link from 'next/link';
import Pagination from './Pagination';
import {perPage} from '../config';
import styled from 'styled-components'
import Delete from './Delete'




const SINGLE_PRODUCT = gql`
    query SINGLE_PRODUCT($id: ID!) {
        item(where:{id:$id}){
            id
            title
            description
            meta
            largeImage
            regular_price
        }

    }
`

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip) {
      id
      title
      regular_price
      description
      image
      largeImage
    }
  }
`;

export default class Items extends Component {
    
    render() {
        
        return (
            <>
                
                <Query query={ALL_ITEMS_QUERY}
                    variables={{
                    skip: this.props.page * perPage - perPage,
                  }}
                >
                    {({data,error,loading}) => {
                        if(loading) return null;
                        if(error) return <p>Error...</p>
                        console.log(data)

                        return<div>
                            <table id="customers">
                                <tr>
                                    <th>Image</th>
                                    <th>title</th>
                                    <th>price</th>
                                    <th>Actions</th>
                                    
                                </tr>
                                {data.items.map(item=>(
                                <tr key={item.id}>
                                    <td><div className="p-img">{item.image && <img src={item.image} alt={item.title} />}</div></td>
                                    <td>{item.title}</td>
                                    <td>${item.regular_price}</td>
                                    <td>
                                        <Delete itemId ={item.id} />
                                        <Link href={`/admin/update?id=${item.id}`} >
                                            <a><i class="fa fa-edit"></i></a>   
                                        </Link>
                                        
                                    </td>
                                    
                                </tr>
                                
                                ))}
                            </table>
                            
                        </div>
                    }}
                </Query>
                <Pagination page={this.props.page}/>
            </>
        )
    }
}
