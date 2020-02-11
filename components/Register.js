import React, { useState, useEffect }  from 'react';
import styled from 'styled-components'
import Router from 'next/router'
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {AlternateEmail} from 'styled-icons/material/AlternateEmail'
import {UserCircle} from 'styled-icons/boxicons-regular/UserCircle'
import Link from 'next/link';
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($email:String!,$name:String!,$password:String!){
        signup(email:$email,name:$name,password:$password){
            id
        }
    } 


`;

const ResgisterWrapper = styled.div`

    display:flex;
    align-items:center;
    height:70vh;

`
const UserIcon = styled(UserCircle)`
    width:12px;
    height:13px;
    color: #b1b7c4;
`

const EmailIcon = styled(AlternateEmail)`
    width:12px;
    height:13px;
    color: #b1b7c4;
`

const Signupcontainer = styled.div`
width:450px;
margin:auto;
form{
    width:100%;
}

`
const Register = () =>{

    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const data = {
        name,
        email,
        password


    }
    

    return(
        <ResgisterWrapper>
        <Signupcontainer>
            <Mutation mutation={SIGNUP_MUTATION} variables={data}
            refetchQueries={[
                {query:CURRENT_USER_QUERY}
            ]}
            >
                {(signup,{loading,error}) =>{
                    if(error){
                        return null;
                    }
                return(<form className='login-form' onSubmit={async e =>{
                e.preventDefault();
                const res = await signup();
                console.log(res);
                setname('')
                setemail('')
                setpassword('')
                if(res){
                    Router.push('/')
                }
                
                }}>   
                
                <fieldset disabled={loading} aria-busy={loading}>
                {error && <p>{error}</p>} 
                <div className="flex-row">
                    <label className="lf--label" htmlFor="name">
                        <UserIcon />
                    </label>
                    <input id="name" className='lf--input' value={name} onChange={(e) => setname(e.target.value)} placeholder='Name' type='text' required/>
                </div>
                <div className="flex-row">
                    <label className="lf--label" htmlFor="username">
                        <EmailIcon />
                    </label>
                    <input id="username" className='lf--input' name={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' type='text' required/>
                </div>
                <div className="flex-row">
                    <label className="lf--label" htmlFor="password">
                    <svg x="0px" y="0px" width="15px" height="5px">
                        <g>
                        <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>
                        </g>
                    </svg>
                    </label>
                    <input id="password" className='lf--input' value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password' type='password' required/>
                </div>
                <input className='lf--submit' type='submit' value={`Register${loading ? 'ing' : ''}`} />
                </fieldset>
            </form>
        )}}
            </Mutation>
            <Link href='/login'><a className='lf--forgot' >Already have an account Login</a></Link>
            
        </Signupcontainer>
        </ResgisterWrapper>
    )

}

export default Register;