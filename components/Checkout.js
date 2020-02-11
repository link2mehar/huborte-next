import React,{useState} from 'react';
import TakeMyMoney from './TakeOrder';
import User from './User';

import {Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import Router from 'next/router';

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION(
    $name: String!
    $email: String!
    $phone:String!
    $address:String!
    $city: String!
    $province: String!
    
    
    
  ) {
    createOrder(
      name: $name
      email: $email
      phone:$phone
      address:$address
      city:$city
      province: $province
     
    
      

    ) {
      id
      
    }
  }
`;






const Checkout = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('')
    const [city, setcity] = useState('')
    const [province, setprovince] = useState('')
    const state = {
      name,
      email,
      phone,
      address,
      city,
      province
        


        }
  
    
    
    return(
        <div className="container mobile my d-flex checkout-main" style={{boxSizing:'border-box'}}>
        <div className="billing-summary" >
        <Mutation mutation={CREATE_ORDER_MUTATION} variables={state}>
        {(createOrder, { loading, error }) => (
            <form className="checkout-form"  onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                
                console.log(state);
                const res = await createOrder();
                console.log(res);
                // change them to the single item page

                
            
            }}>

                <div className="row">
                <div className="col-50">
                    <h3 style={{marginBottom:'15px'}}>Billing Address</h3>
                    <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                    <input required type="text" id="fname" onChange={e => setname(e.target.value)} name="firstname" placeholder="Full Name" />
                    <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                    <input required type="text" id="email" onChange={e => setemail(e.target.value)} name="email" placeholder="Email" />
                    <label htmlFor="phone"><i className="fa fa-phone"></i> Phone number</label>
                    <input required type="text" id="phone" name="phone" onChange={e => setphone(e.target.value)} placeholder="Mobile number" />
                    <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                    <input  required type="text" id="adr" name="address" onChange={e => setaddress(e.target.value)} placeholder="Address" />
                    <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                    <input required type="text" id="city" name="city" onChange={e => setcity(e.target.value)} placeholder="City" />

                    <div className="row">
                    <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input required type="text" id="state" onChange={e => setprovince(e.target.value)} name="state" placeholder="Province" />
                    </div>
                   
                    </div>
                </div>


                </div>
                
                <br />
               <input type='submit' className="btn-solid" style={{marginTop:'15px'}} value="Confirm Order"  />
                
            </form>
            )}
            </Mutation>
        </div>
        
        <div className="order-summary"  >
            
            <User>
                {({data}) => {
                    if(!data){
                        return null
                    }
                    let subtotal = 0;
                    let total = 0;
                    return(
                        <>
                        
                        {data && data.me && data.me.cart && (
                            <>
                                <h4>Cart - 
                                    <span className="price">
                                    <i className="fa fa-shopping-cart"></i>
                                        <b>- {data.me.cart.length}</b>
                                    </span>
                                </h4>
                                {data.me.cart.map(item => {
                                   
                                    subtotal += item.quantity * item.item.regular_price ;
                                    total += subtotal;
                                    return(
                                    <p key={item.id}><a href="#">{item.item.title}</a><span>-{item.quantity}-</span> <span className="price">{subtotal}</span></p>  
                                    )
                                   
                            })}
                            </>
                        )}
                         <hr />
                        <p>Total Rs-<span className="price" ><b>{total}</b></span></p>
                        </>
                    )
                }}
            </User>
            
          
        <div>
            Payment mehod: Cash On Delivery
        </div>
        </div>
    </div>
    )
}
export default Checkout