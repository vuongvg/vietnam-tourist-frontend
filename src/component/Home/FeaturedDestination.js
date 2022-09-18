import { Typography } from "@mui/material";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

function FeaturedDestination () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <KeyboardArrowRight fontSize="large"/>,
    prevArrow: <KeyboardArrowLeft fontSize="large"/>
  };

  return (
    <div className="container my-5">
      <Typography variant="h6" component="h1" className="opacity-0d5">
        Featured
      </Typography>
      <Typography variant="h4" component="h1">
        Featured Destination
      </Typography>
      <div className="mt-4">
        <Slider {...settings}>
          <div className="px-2 pb-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-2.jpg.pagespeed.ic.RMg1c-upbN.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>San Francisco, USA</h4>
                <div className="mt-3">15 Listing</div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-2.jpg.pagespeed.ic.RMg1c-upbN.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>San Francisco, USA</h4>
                <div className="mt-3">15 Listing</div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-2.jpg.pagespeed.ic.RMg1c-upbN.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>San Francisco, USA</h4>
                <div className="mt-3">15 Listing</div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-2.jpg.pagespeed.ic.RMg1c-upbN.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>San Francisco, USA</h4>
                <div className="mt-3">15 Listing</div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-2.jpg.pagespeed.ic.RMg1c-upbN.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>San Francisco, USA</h4>
                <div className="mt-3">15 Listing</div>
              </div>
            </div>
          </div>
          <div className="px-2 pb-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-2.jpg.pagespeed.ic.RMg1c-upbN.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>San Francisco, USA</h4>
                <div className="mt-3">15 Listing</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default FeaturedDestination;