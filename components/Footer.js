import Link from 'next/link';

const Footer = () => {
    return(
        <div className="site-footer">
            <footer >
                <div className="container">
                    <div className="d-flex" style={{boxSizing:'border-box'}}>
                    <div className="col-sm-12 col-md-6" style={{width:'50%',boxSizing:'border-box'}}>
                        <h6>About</h6>
                        <p className="text-justify" style={{paddingRight:'75px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>

                    <div className="col-xs-6 col-md-3" style={{width:'25%',boxSizing:'border-box'}}>
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><Link href="/about"><a>About us</a></Link></li>
                            <li><Link href="/contact"><a>Contact us</a></Link></li>
                            <li><Link href="/about"><a>Privacy Policy</a></Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3" style={{width:'25%',boxSizing:'border-box'}}>
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><Link href="/about"><a>About us</a></Link></li>
                            <li><Link href="/contact"><a>Contact us</a></Link></li>
                            <li><Link href="/about"><a>Privacy Policy</a></Link></li>
                        </ul>
                    </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="d-flex" style={{justifyContent:'space-between'}}>
                    <div className="col-md-8 col-sm-6 col-xs-12" >
                        <p className="copyright-text">Copyright &copy; Designed and developed by 
                    <a href="#"> codesol.dev</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12" >
                        <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;