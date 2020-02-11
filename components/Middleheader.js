import Link from 'next/link'
import Search from './Search'
const Middleheader = () =>{
    return(
        <div>
            <div className="container d-flex col-unset" style={{justifyContent:'space-between'}}>
                <div className="log-container" style={{width:'10%',alignSelf:'center'}}>
                    <Link href="/" ><a className="log-link">Logo</a></Link>
                </div>
                <div className="search-container" style={{width:'50%'}}>
                    <form >
                        <Search />
                        {/* <input type="text" className="search-field" placeholder="I'm shopping for..." />
                        <button type="submit"><i className="fa fa-search"></i></button> */}
                    </form>
                    
                </div>
                <div className="cart-data" style={{width:'10%',alignSelf:'center'}}>
                <Link href="/cart" ><i className="fa fa-cart-arrow-down"></i></Link>
                </div>
            </div>
        </div>
    )

}
export default Middleheader;