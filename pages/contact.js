const Contact = () => {
    return(
        <div>
            <div className="container">
                <div className="d-flex my mobile">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54832.781079737295!2d73.4091927192813!3d30.801265269800915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922a75d9a9639e5%3A0xa25a5b6b17fab12b!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1577688879053!5m2!1sen!2s" width="800" height="450" frameBorder="0" style={{border:'0'}} allowFullScreen=""></iframe>
                    </div>
                    <div>
                        <div className="contact-right">
                            <ul>
                                <li>
                                    <div className="contact-icon">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h6>Contact Us</h6>
                                    </div>
                                    <div className="media-body">
                                        <p>+91 123 - 456 - 7890</p>
                                        <p>+86 163 - 451 - 7894</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h6>Address</h6>
                                    </div>
                                    <div className="media-body">
                                        <p>ABC Complex,Near xyz, New York</p>
                                        <p>USA 123456</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h6>Address</h6>
                                    </div>
                                    <div className="media-body">
                                        <p>ABC Complex,Near xyz, New York</p>
                                        <p>USA 123456</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <h6>Address</h6>
                                    </div>
                                    <div className="media-body">
                                        <p>ABC Complex,Near xyz, New York</p>
                                        <p>USA 123456</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contact-form my">
                <form action="" >
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>

                    <input type="submit" className="btn-solid" value="Submit" />
                </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;