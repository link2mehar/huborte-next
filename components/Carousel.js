import Slider from "react-slick";

const Carousel = (props) =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:5,
        slidesToScroll: 5,
        autoplay:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        
          <Slider {...settings}>
             
                  {props.children}
              
              
          </Slider>
         
          )
}

export default Carousel