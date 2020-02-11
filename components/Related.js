import Slider from "react-slick";

const Related = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
      return (
        <div className="my">
            <h3>Customers who viewed this item also viewed</h3>
          <Slider {...settings}>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            <div>
                <div className="carousel-inner">
                  <div className="carousel-img-container">
                    <img src="/laptop.png" alt="caousel"  />
                  </div>
                  <p>Price $100</p>
                  <a>Best product</a>
                </div>
            </div>
            
            
            
            
            
         
          </Slider>
        </div>
      );
}

export default Related;