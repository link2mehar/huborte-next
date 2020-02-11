import Link from 'next/link';
import {NAV} from './Styles/NavStyle'
import styled from 'styled-components';
import User from './User';
import Signout from './Signout'



const NavBar = props => {

    const burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

    const Inner = styled.div`
    
        max-width: ${props => props.theme.maxWidth};
        margin:0 auto;
    
    `
    
 

    return(
            

                <NAV>
                    <Inner>
                    <div className="navWide">
                        <div className="wideDiv">
                                <Link href="/" ><a>Home</a></Link>
                                <Link  href="/c/[cid]" as = "/c/mens" ><a >Men's</a></Link>
                                <Link  href="/c/[cid]" as = "/c/womens"><a >Women's</a></Link>
                                <Link  href="/c/[cid]" as = "/c/mobile-accessories" ><a >Mobile & Accessories</a></Link>
                                <Link  href="/c/[cid]" as = "/c/electronics" ><a >Electronics</a></Link>
                                <Link  href="/c/[cid]" as = "/c/books-stationary" ><a >Books & Stationary</a></Link>
                                <Link  href="/c/[cid]" as = "/c/home-lifestyle" ><a >Homes & Lifestyle</a></Link>
                                
                        </div>
                        </div>
                        <div className="navNarrow">
                            <i className="fa fa-bars fa-2x" onClick={burgerToggle}></i>
                            <div className="narrowLinks">
                                <Link href="/" ><a>Home</a></Link>
                                <Link href="/shop" ><a>Shop</a></Link>
                                <Link  href="/" ><a >Men's</a></Link>
                                <Link  href="/" ><a >Women's</a></Link>
                                <Link  href="/" ><a >Mobile & Accessories</a></Link>
                                <Link  href="/" ><a >Stationary</a></Link>
                                <Link  href="/" ><a >Electronics</a></Link>
                                <Link  href="/" ><a >Homes & Lifestyle</a></Link>
                                
                        </div>
                    </div>
                    </Inner>
                </NAV>
                    
                    
            )

}
export default NavBar



