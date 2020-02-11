import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
const MSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="slide1 slide"  >
                <div className="slider-inner">
                  <img src="//i.alicdn.com/img/tfs/TB1x8x9eEY1gK0jSZFMXXaWcVXa-990-400.jpg" />
                    {/* <h1>Dell Xps</h1>
                    <p>A complete solution for gamers to game at high defination</p>
                    <h2>Now</h2>
                    <h5><strong>Available</strong></h5>
                    <button className="btn-solid">Shop Now</button> */}
                </div>
            </div>
            <div className="slide1 slide"  >
                <div className="slider-inner">
                  <img src="https://s.alicdn.com/@img/tfs/TB11MujsUz1gK0jSZLeXXb9kVXa-990-400.jpg" />
                    {/* <h1>Dell Xps</h1>
                    <p>A complete solution for gamers to game at high defination</p>
                    <h2>Now</h2>
                    <h5><strong>Available</strong></h5>
                    <button className="btn-solid">Shop Now</button> */}
                </div>
            </div>
            <div className="slide1 slide"  >
                <div className="slider-inner">
                  <img src="//i.alicdn.com/img/tfs/TB1qzN_eET1gK0jSZFrXXcNCXXa-990-400.jpg" />
                    {/* <h1>Dell Xps</h1>
                    <p>A complete solution for gamers to game at high defination</p>
                    <h2>Now</h2>
                    <h5><strong>Available</strong></h5>
                    <button className="btn-solid">Shop Now</button> */}
                </div>
            </div>
            
            
         
          </Slider>
        </div>
      );

}
export default MSlider;