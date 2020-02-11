

const Megadeals = () => {


    return(

        <div className="container my">

                <div className="container d-flex carousel-head" >
                    <h3>Our Best Deals</h3>
                    
                </div>
                
                <div className="d-flex my" style={{flexWrap:'wrap',boxSizing:'border-box'}}>
                    <div className="deals d-flex">
                        <div className="deal-content">
                            <h3 className="deal-heading">Apple I phone</h3>
                            <p className="deal-description">All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. </p>
                            <div className="deal-price">Price 1500</div>
                            <button className="deal-btn">Shop Now</button>
                        </div>
                        <div className="img-container" className="deal-img">
                            <img src="/laptop.png" alt="ds" style={{width:'100%'}} />
                        </div>
                    </div>
                    <div className="deals d-flex">
                        <div className="deal-content">
                            <h3 className="deal-heading">Apple I phone</h3>
                            <p className="deal-description">All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. </p>
                            <div className="deal-price">Price 1500</div>
                            <button className="deal-btn">Shop Now</button>
                        </div>
                        <div className="img-container" className="deal-img">
                            <img src="/laptop.png" alt="ds" style={{width:'100%'}} />
                        </div>
                    </div>
                    
                </div>
            
        </div>
    )
}

export default Megadeals;