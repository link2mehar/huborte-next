import React,{useState} from 'react';
import styled from 'styled-components'
import {Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Router from 'next/router';

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $regular_price: Int!
    $sale_price: Int
    $stock:Int!

    
    
  ) {
    updateItem(
      title: $title
      description: $description
      regular_price:$regular_price
      sale_price:$sale_price
      stock:$stock
    
      

    ) {
      id
      categories{
        name
      }
    }
  }
`;



const Input = styled.input`

    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom:15px;

`
const Textarea = styled.textarea`

    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom:15px;

`
const Select = styled.select`

    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom:15px;

`
const BUTTON = styled.button`

    background-color: #f44336;
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

const UpdateItem = () => {


    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [regular_price, setregular_price] = useState('')
    const [saleprice, setsaleprice] = useState('')
    const [stock, setstock] = useState('')

    

    const state = {
          
            title,
            description,
            regular_price,
            saleprice,
            stock,
            


    }
   
    return(
            <div>
                <Mutation mutation={UPDATE_ITEM_MUTATION} variables={state}>
                    {(createItem, { loading, error }) => (
                <form method="post" onSubmit={async e => {
                    // Stop the form from submitting
                    e.preventDefault();
                    
                    console.log(state)
                    const res = await createItem();
                    // change them to the single item page
                    console.log(res);
                    Router.push({
                      pathname: '/admin/products',
                    
                    });
                  }}>



                    <label htmlFor="title">Tile *</label>
                    <Input type="text" id="title" name="title" required value={title} onChange={(e) => settitle(e.target.value)} placeholder="Product title..." />


                    <label htmlFor="description">Description *</label>
                    <Textarea type="text" id="description" name="description" required value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Product description..." />


        


                   

                    <label htmlFor="regprice">Regular price</label>
                    <Input type="number" id="regprice" name="regprice" required  value={regular_price} onChange={(e) => setregular_price(parseFloat(e.target.value))} placeholder="Regular price" />


                    <label htmlFor="salprice">Sale price</label>
                    <Input type="number" id="salprice" name="salprice"  value={saleprice} onChange={(e) => setsaleprice(parseFloat(e.target.value))} placeholder="Sale price" />

                    <label htmlFor="stockqty">Stock quantity *</label>
                    <Input type="number" id="stockqty" name="stockqty" required value={stock} onChange={(e) => setstock(parseFloat(e.target.value))} placeholder="Stock quantity" />

                    {/* <label htmlFor="inStock">In Stock</label>
                    <Input type="checkbox" id="inStock" name="inStock"   value={instock} onChange={(e) => setinstock(e.target.value)}  /> */}

            
                
                    <BUTTON type="submit" >Update</BUTTON>
                </form>
                 )}
                 </Mutation>
            </div>
       
    )

}
export default UpdateItem