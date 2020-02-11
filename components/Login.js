import React,{useState} from 'react'
import styled from 'styled-components'
import {AlternateEmail} from 'styled-icons/material/AlternateEmail'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import Router from 'next/router'
import User from './User';

import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
     
      
    }
  }
`;



const EmailIcon = styled(AlternateEmail)`
    width:12px;
    height:13px;
    color: #fff;
`

const LoginWrapper = styled.div`

    display:flex;
    align-items:center;
    height:70vh;

`


const Logincontainer = styled.div`

width:450px;
margin:auto;
form{
    width:100%;
}

`
const Login = () =>{

    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const data = {
        email,
        password
    }

   


    return(
        <LoginWrapper>
        <Logincontainer>
            <Mutation mutation={SIGNIN_MUTATION} 
            variables={data}
            refetchQueries={[
                {query:CURRENT_USER_QUERY}
            ]}>
                {(signin,{loading,error})=>{
                    return(
                        <form className='login-form' onSubmit={async (e) =>{
                            e.preventDefault();
                            const res = await signin();
                            // console.log(res);
                            if(res){
                                Router.push('/');
                                
                            }
                        }}>
                            <div className="flex-row">
                                <label className="lf--label" htmlFor="email">
                                    <EmailIcon />
                                </label>
                                <input id="email" className='lf--input' value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' type='text' />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" htmlFor="password">
                                <svg x="0px"  y="0px" width="15px" height="5px">
                                    <g>
                                    <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>
                                    </g>
                                </svg>
                                </label>
                                <input id="password" className='lf--input' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' type='password' />
                            </div>
                            <input className='lf--submit' type='submit' value={`Login${loading ? 'ing' : ''}`} />
                        </form>

                    )
                }}
            </Mutation>
            {/* <a className='lf--forgot' href='#'>Forgot password?</a> */}
            <Link href='/register'><a className='lf--forgot' style={{marginTop:'10px'}}>Don't have account Resister</a></Link>
            
        </Logincontainer>
        </LoginWrapper>
    )

}

export default Login;