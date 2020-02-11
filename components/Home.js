import Mslider from './Mslider'
import {Banner1,Banner2} from './Banners'
import Featured from './Featured'
import Trending from './Trending'
import Megadeals from './Megadeal'
import {Widget} from './Widgets'
import Link from 'next/link';

const Home = () =>{
    return(
        <>  <div className="d-flex" style={{padding:'15px',backgroundColor:'#fff'}}>
                <div className="m-slider">
                    <Mslider />
                </div>
                <div className="m-slide-boxes none">
                    <p className="spec-m-heading">Anything in heading</p>
                    <div className="spec-m-box">
                        <p className="spec-m-titles">Urdu Books</p>
                        <div className="d-flex" style={{justifyContent:'space-between'}}>
                            <div  style={{width:'70%'}} style={{alignSelf:'center'}}>
                            <Link  href="/c/[cid]" as = "/c/womens" ><a ><button className="spec-m-btn">Shop now</button></a></Link>
                                
                            </div>
                            <div className="img-container" style={{width:'30%'}}>
                                <img src="/laptop.png" style={{width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="spec-m-box">
                        <p className="spec-m-titles">English Books</p>
                        <div className="d-flex" style={{justifyContent:'space-between'}}>
                            <div  style={{width:'70%'}} style={{alignSelf:'center'}}>
                            <Link  href="/c/[cid]" as = "/c/womens" ><a ><button className="spec-m-btn">Shop now</button></a></Link>
                            </div>
                            <div className="img-container" style={{width:'30%'}}>
                                <img src="/laptop.png" style={{width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="spec-m-box">
                        <p className="spec-m-titles">Novels</p>
                        <div className="d-flex" style={{justifyContent:'space-between'}}>
                            <div  style={{width:'70%'}} style={{alignSelf:'center'}}>
                            <Link  href="/c/[cid]" as = "/c/womens" ><a ><button className="spec-m-btn">Shop now</button></a></Link>
                            </div>
                            <div className="img-container" style={{width:'30%'}}>
                                <img src="/laptop.png" style={{width:'100%'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Trending />
            <Banner1 />
            <Widget catName="Newly Added" catSlug="mens"/>
            <Widget catName="Best Sellers" catSlug="womens"/>
            <Megadeals />
            <Widget catName="Books By Pakistani Publishers" catSlug="mobile-accessories"/>
            <Widget catName="Fiction & Literature" catSlug="books-stationary"/>
            <Banner2 />
            <Widget catName="Cooking Books" catSlug="home-lifestyle"/>
            <Widget catName="Humor Books" catSlug="electronics"/>

        </>
    )
}
export default Home