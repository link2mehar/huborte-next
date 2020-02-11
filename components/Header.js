import NavBar from './NavBar'
import Router from 'next/router'
import NProgress from 'nprogress'
import Link from 'next/link'


import Navbar from './NavBar';
import Middleheader from './Middleheader';
import Topnav from './Topnav'


Router.onRouteChangeStart = () => {
    NProgress.start();

}
Router.onRouteChangeComplete = () => {
    NProgress.done();
}



const Header = () => {

    return (
        <div>
            <header>
                <Topnav />
                <Middleheader />
                <div className="main-menu" style={{backgroundColor:'rgb(41, 128, 236)'}}>
                    <Navbar />
                </div>
            </header>
        </div>
    )


}

export default Header;