import { Typography } from "@mui/material";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';
import FeaturedDestinationItem from "../ShareComponents/FeaturedDestinationItem";
import FeaturedDestinationsSkeleton from "../Skeleton/DestinationsSkeleton";
import request from "../../api";
import { useState, useEffect } from "react";

function FeaturedDestination () {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <KeyboardArrowLeft fontSize="large"/>
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <KeyboardArrowRight fontSize="large"/>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <SlickArrowRight/>,
    prevArrow: <SlickArrowLeft/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    request.get(
      '/location',
      {
        params: { 
          limit:5 
        }
      }
    )
    .then((res) => {
        if (res.status === 200) {
            setLoading(true);
            setData(res.data);
        } else {
            
        }
    })
    .catch(() => {
        console.log("request failed");
    })
  }, []);

  return (
    <div className="container my-5 px-4 px-md-0">
      <Typography variant="h6" component="h1" className="opacity-0d5">
        Featured
      </Typography>
      <Typography variant="h4" component="h1">
        Featured Destination
      </Typography>
      {
        !loading
          ?
            <FeaturedDestinationsSkeleton />
          :
            <div className="mt-4">
              <Slider {...settings}>
                {
                  data
                    &&
                      data.map((item, index) => {
                        return <FeaturedDestinationItem key={index} data={item}/>
                      })
                }
              </Slider>
            </div>
      }
    </div>
  )
}

export default FeaturedDestination;