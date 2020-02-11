import React, { Component } from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import styled from 'styled-components';
import {Star} from 'styled-icons/boxicons-solid/Star'
import Related from './Related'
import Stabs from './Stabs'
import AddToCart from './AddtoCart'
import Head from 'next/head'
import Skeleton from 'react-loading-skeleton';


const YelStar = styled(Star)`
  color: #ff9f1a;
  width:16px;
`


const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($slug: String!) {
    item(where: { slug: $slug }) {
      id
      title
      description
      largeImage
      stock
      regular_price
      categories{
          name
      }
    }
  }
`;
const SingleWrapper = styled.div`
    

`
const SingleWrapperInner = styled.div`
    display:flex;
    justify-content: space-between;
    margin:auto;
    
    div{
        box-sizing:border-box;
        width: calc(1/2*100% - (1 - 1/2)*20px);
    }
    @media (max-width:768px){
        flex-direction:column;
        div{
            width:100%;
        }
    }

`
const SingleImgContainer = styled.div`
    width:100%;
    box-sizing:border-box;
    /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
    padding:50px;
    background: #fafafa;
    &:hover img {
        transform:scale(1.1);
    }

    img{
        width:100%;
        object-fit:contain;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
`
const SingledetailsContainer = styled.div`
    div{
        width:100%;
        h2{
            font-weight: 300;
            font-size: 30px;
            margin:0;
            color: #43484D;
            letter-spacing: -2px;
            text-transform:capitalize;
        }
    }

    padding:25px;
`


export default class Single extends Component {
    render() {
        return (
            <SingleWrapper>
                
                <Query query={SINGLE_ITEM_QUERY} variables={{slug:this.props.id}}>
                    {(data,error,loading)=>{
                       if(loading) return <div className="loader"></div>;
                       
                       {console.log(data.data)}
                       return(
                           <>
                           
                           <SingleWrapperInner>
                            
                           {!data.data && (
                               <>
                                <SingleImgContainer >
                                        <Skeleton />
                                </SingleImgContainer>
                                <SingledetailsContainer>
                                        <Head>
                                            
                                            <title>Alhashmi </title>
                                        </Head>
                                    
                                        <div>
                                            <p> <Skeleton /></p>
                                            
                                            <h2><Skeleton /></h2>
                                            <p><Skeleton /></p>
                                            <div>
                                                <Skeleton />
                                            </div>
                                            <hr />
                                            <p><Skeleton /></p>
                                            
                                            <p ><Skeleton /></p>
                                            <p><Skeleton /></p>
                                            <div>
                                            <Skeleton />
                                                
                                            </div>
                                            <Skeleton />
                                        </div>

                                    
                                        

                                </SingledetailsContainer>
                                </>
                                )}


                           {data.data && (
                               <>
                                <SingleImgContainer >
                                        <img src={data.data.item.largeImage} title={data.data.item.title} />
                                </SingleImgContainer>
                                <SingledetailsContainer>
                                        <Head>
                                            <meta name="description" content={data.data.item.description} />
                                            <title>Alhashmi | {data.data.item.title}</title>
                                        </Head>
                                    
                                        <div>
                                            {data.data.item && data.data.item.categories && <p style={{color:'#84888c'}}>{data.data.item.categories.name}</p>}
                                            
                                            <h2>{data.data.item.title }</h2>
                                            <p>Availability : {data.data.item.stock} in stock</p>
                                            <div>
                                                <YelStar />
                                                <YelStar />
                                                <YelStar />
                                                <YelStar />
                                                <YelStar />
                                            </div>
                                            <hr />
                                            <p style={{color:'#757779'}}>{data.data.item.description}</p>
                                            {/* <p>{data.data.item.description}</p> */}
                                            <p style={{padding:'10px',backgroundColor:'#231d1d',color:'#fff'}}>Buy now and get free delivery at you door step.</p>
                                            <p style={{color:'#aaa',fontSize:'25px'}}>{data.data.item.sale_price && (<small><del>$1500</del></small>)}   <span style={{color:'#f44336'}}><strong>${data.data.item.regular_price}</strong></span></p>
                                            <div>
                                                <p>Order on Whatsapp</p>
                                                <a href="https://wa.me/923034466052"  target="_blank" className="wahtsappNum" title="Chat On Whatsapp"><i style={{marginBottom:'10px',color:'#7DA0FE',fontSize:'22px'}} className="fa fa-whatsapp fa-2x" ></i>
                                                </a>
                                                {/* <a href="tel:923034466052" target="_blank"  title="Call Us Now"> <i class="fa fa-phone"></i> </a> */}
                                            </div>
                                            
                                                <AddToCart  id={data.data.item.id} />
                                            
                                        </div>

                                    
                                        

                                </SingledetailsContainer>
                                </>
                                )}
                           </SingleWrapperInner>
                           <hr style={{marginTop:'50px'}}/>
                           {/* <Related />
                           <hr className="my"/> */}
                           {/* <Stabs item={data.data.item}/> */}
                           </>
                                    
                           
                    )}     
                    }
                </Query>
            </SingleWrapper>
        )
    }
}
