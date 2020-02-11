import Link from 'next/link'
import User from './User';
import Signout from './Signout'
const Topnav = () =>{


    return(
        <div className="top-header">
            <div className="container d-flex col-unset" style={{justifyContent:'space-between'}}>
                <div className="header-contact">
                    <div>
                        <ul>
                            <li><i className="fa fa-whatsapp"></i></li>
                            <li>Call Us: +92 303-4466052</li>
                        </ul>
                    </div>
                </div>
                <div className="user-account">
                <User>
                    {({data}) => {
                    if(data){
                        const {me} = data;
                        
                        return(
                    <ul>
                        <li className="dropdown"><i className="fa fa-user" aria-hidden="true"></i> My Account
                            <div className="dropdown-content">
                                <ul >
                                    {me && (
                                        <>
                                            <Link href="/profile" ><a>Profile</a></Link>
                                            <Signout />
                                        </>
                                    )}
                                    {!me && (
                                        <>
                                            <Link href="/login" ><a>Login</a></Link>
                                            <Link href="/register" ><a>Register</a></Link>
                                            
                                        </>
                                    )}
                                    
                                </ul>
                            </div>
                            
                        </li>
                    </ul>
                        )}
                        return null;
                        
                        
                    }}
                </User>
                </div>
            </div>
        </div>
    )
}

export default Topnav