
import React from 'react'
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import Link from 'next/link'
import RemoveFromCart from './RemovefromCart'
import styled from 'styled-components';


const CartrWrapper = styled.div`

    display:flex;
    align-items:center;
    height:70vh;
    @media (max-width:767px){
        
    }

`


const Cart = () => (

            <CartrWrapper>
               <User> 
                   {({data}) => {
                       if(!data)  {
                           return(
                            <div className="d-flex" style={{justifyContent:'space-between',margin:'75px 0'}}>
                                <div>
                                    <h5>Your Cart is empty</h5>
                                    <Link  href="/shop"><a className="btn btn-solid">Shop Now</a></Link>
                                </div>
                            </div>
                           )
                       };
                        let subtotal = 0;
                        let total = 0;
                       
                       return(
                       <>
                        {data && data.me && data.me.cart && (
                            <>
                                
                               
                                <div className="container" style={{overflowX:'auto'}}>
                                
                                <table className="table cart-table cart-table-main table-responsive-xs my" >
                                    <thead>
                                        <tr className="table-head">
                                            <th scope="col">image</th>
                                            <th scope="col">product name</th>
                                            <th scope="col">price</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">action</th>
                                            <th scope="col">Sub Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.me.cart.map(item => {
                                        console.log(item)
                                        subtotal += item.quantity * item.item.regular_price ;
                                        total += subtotal;
                                        return(
                                        <tr key={item.item.id}>
                                            <td style={{textAlign:'center'}}>
                                                <div style={{width:'50px',height:'50px',border:'1px solid #f5f5f5'}}>
                                                <img src={item.item.image}
                                                        alt={item.item.title} 
                                                        style={{width:'100%'}}
                                                        />
                                                </div>
                                            </td>
                                            <td><a href="#">{item.item.title}</a>
                                                <div className="mobile-cart-content row">
                                                    <div className="col-xs-3">
                                                        <div className="qty-box">
                                                            <div className="input-group">
                                                                <input type="text" name="quantity" readOnly className="form-control input-number" value="1" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-3">
                                                    <h2 className="td-color">Rs. {item.item.regular_price}</h2>
                                                    </div>
                                                    <div className="col-xs-3">
                                                        <h2 className="td-color"><a href="#" className="icon"><i className="icon-close"></i></a></h2>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h2>Rs. {item.item.regular_price}</h2>
                                            </td>
                                            <td>
                                                <div className="qty-box">
                                                    <div className="input-group"><span className="input-group-prepend">
                                                        <button type="button" className=" quantity-left-minus" data-type="minus" data-field="">
                                                            <i className="fa fa-angle-left"></i>
                                                        </button></span>
                                                        <input type="text" name="quantity" readOnly className="form-control input-number" value={item.quantity} />
                                                        <span className="input-group-prepend">
                                                            <button className="quantity-right-plus" data-type="plus">
                                                            <i className="fa fa-angle-right"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><RemoveFromCart id={item.id} /></td>
                                            <td>
                                            <h2 className="td-color">Rs. {subtotal}</h2>
                                            </td>
                                        </tr>
                                    )
                                   
                                    })}
                                    </tbody>
                                </table>
                                <table className="table cart-table table-responsive-md">
                                    <tfoot>
                                        <tr>
                                            <td>total price :</td>
                                            <td>
                                                <h2>Rs. {total}</h2>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            
                        
                                <div className="d-flex col-unset" style={{justifyContent:'space-between',margin:'75px 0'}}>
                                    <div>
                                        <Link  href="/shop"><a className="btn btn-solid">continue shopping</a></Link>
                                    </div>
                                    <div >
                                        <Link href="/checkout"><a className="btn btn-solid" >Checkout</a></Link>
                                    </div>
                                
                                </div>
                            </div> 
                                
                            
                            </>
                        )}
                       </>
                       )
                   }}
                </User>

            </CartrWrapper>
    
)
    

export default Cart;