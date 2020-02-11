import React,{useState} from 'react';
import styled from 'styled-components'
import {Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Router from 'next/router';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $meta:String!
    $keyword:String!
    $regular_price: Int!
    $sale_price: Int
    $image: String
    $largeImage: String
    $stock:Int!
    $categories:String
    $slug:String!
    
    
  ) {
    createItem(
      title: $title
      description: $description
      meta:$meta
      keyword:$keyword
      regular_price:$regular_price
      sale_price:$sale_price
      image: $image
      largeImage: $largeImage
      stock:$stock
      categories:$categories
      slug:$slug
    
      

    ) {
      id
      categories{
        name
      }
    }
  }
`;

const ALL_CATEGORIES_QUERY = gql`
  query ALL_CATEGORIES_QUERY {
    categories {
      id
      name
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

const CreateItem = () => {

    const [image, setimage] = useState('');
    const [largeImage, setlargeImage] = useState('');
    const [title, settitle] = useState('')
    const [slug, setslug] = useState('')
    const [description, setdescription] = useState('')
    const [meta, setmeta] = useState('')
    const [keyword, setkeyword] = useState('')
    const [regular_price, setregular_price] = useState('')
    const [saleprice, setsaleprice] = useState('')
    const [stock, setstock] = useState('')
    const [instock, setinstock] = useState('')
    const [categories, setcategories] = useState('')
    const [tags, settags] = useState('')
    const [brand, setbrand] = useState('')

    

    const state = {
            image,
            largeImage,
            title,
            slug,
            description,
            meta,
            keyword,
            regular_price,
            saleprice,
            stock,
            categories,
            tags,
            brand
            


    }
    const uploadFile = async e => {
        
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'huborte');
        
    
        const res = await fetch('https://api.cloudinary.com/v1_1/codesol-dev/upload', {
          method: 'POST',
          body: data,
        });
        
        const file = await res.json();
        
        setimage(file.url) 
        setlargeImage(file.secure_url)
        
         
      };

      const titleToSlugHandler = e => {
          
          if(title != ''){
           const convertedTitle = title.replace(/ /g, '-').toLowerCase();
           setslug(convertedTitle);
          }
      }

    return(
            <div>
                <Mutation mutation={CREATE_ITEM_MUTATION} variables={state}>
                    {(createItem, { loading, error }) => (
                <form method="post" onSubmit={async e => {
                    // Stop the form from submitting
                    e.preventDefault();
                    
                    if(loading){
                      return <div className="loading"></div>;
                    }
                    const res = await createItem();
                    // change them to the single item page

                    Router.push({
                      pathname: '/admin/products',
                    
                    });
                  }}>

                    <label htmlFor="image">Featured Image *</label>
                    <Input type="file" id="image" name="image" required  onChange={uploadFile} />
                    {image && (
                    <img width="200" src={image} alt="Upload Preview" />
                    )}

                    <label htmlFor="title">Tile *</label>
                    <Input type="text" id="title" name="title" required value={title} onChange={e => settitle(e.target.value)} onBlur = {titleToSlugHandler}  placeholder="Product title..." />
                    
                    <label htmlFor="slug">Slug *</label>
                    <Input type="text" id="slug" name="slug" value={slug}  placeholder="slug..." />



                    <label htmlFor="description">Description *</label>
                    <Textarea type="text" id="description" name="description" required value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Product description..." />


                    <label htmlFor="meta">Meta description *</label>
                    <Textarea type="text" id="meta" name="meta" value={meta} required onChange={(e) => setmeta(e.target.value)} placeholder="Meta description..." />


                    <label htmlFor="keyword">Focus keyword *</label>
                    <Input type="text" id="keyword" name="keyword" required value={keyword} onChange={(e) => setkeyword(e.target.value)} placeholder="keyword..." />


                    <label htmlFor="regprice">Regular price</label>
                    <Input type="number" id="regprice" name="regprice" required  value={regular_price} onChange={(e) => setregular_price(parseFloat(e.target.value))} placeholder="Regular price" />


                    <label htmlFor="salprice">Sale price</label>
                    <Input type="number" id="salprice" name="salprice"  value={saleprice} onChange={(e) => setsaleprice(parseFloat(e.target.value))} placeholder="Sale price" />

                    <label htmlFor="stockqty">Stock quantity *</label>
                    <Input type="number" id="stockqty" name="stockqty" required value={stock} onChange={(e) => setstock(parseFloat(e.target.value))} placeholder="Stock quantity" />

                    {/* <label htmlFor="inStock">In Stock</label>
                    <Input type="checkbox" id="inStock" name="inStock"   value={instock} onChange={(e) => setinstock(e.target.value)}  /> */}

                    <label htmlFor="category">Category</label>
                    <Select id="category"  name="category"  value={categories} onChange={(e) => setcategories(e.target.value)}>
                      <Query query={ALL_CATEGORIES_QUERY}>
                        {({data}) => {
                          if(!data){
                            return null;
                          }
                          return(
                              <>
                              <option value="">Please select</option>
                              {data.categories.map(category => {
                                return(
                                  <option value={category.id}>{category.name}</option>
                                )
                              })}
                                
                              </>
                          )
                        }}
                      </Query>
                        
                    </Select>
                    <label htmlFor="brand">Brand</label>
                    <Input type="text" id="brand" name="brand"  value={brand} onChange={(e) => setbrand(e.target.value)} placeholder="brand..." />

                    <label htmlFor="tags">Tags</label>
                    <Input type="text" id="tags" name="tags" value={tags} onChange={(e) => settags(e.target.value)} placeholder="Product tags..." />
                
                    <BUTTON type="submit" >Publish</BUTTON>
                </form>
                 )}
                 </Mutation>
            </div>
       
    )

}
export default CreateItem