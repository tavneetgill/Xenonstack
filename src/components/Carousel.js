import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      margin: 10, // Add margin between slides
       // Add padding to each slide
    };
  
    return (
        <div className='slider-main'>
      <Slider {...settings}>
        <div>
          <img
            className="carousel-image"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"  // Adjust image size
            alt="Banner 1"
          />
        </div>
        <div>
          <img
            className="carousel-image"
            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"  // Adjust image size
            alt="Banner 2"
          />
        </div>
        {/* Add more images as needed */}
      </Slider>
      </div>
    );
  };
  export default Carousel;