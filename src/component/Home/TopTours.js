import { Typography } from "@mui/material";
import TopTourItem from "../ShareComponents/TourItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import request from "../../api";
import Skeleton from "../Skeleton/HotelSkeleton";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function TopTours () {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => { 
    request.get(
      '/tour',
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
    <div style={{backgroundColor:'#f9faff'}} className="py-5">
      <div className="container">
        <Typography variant="h6" component="h1" className="opacity-0d5">
          Special Offers
        </Typography>
        <Typography variant="h4" component="h1">
          Top Tour Packages
        </Typography>
        <div className="row row-cols-2 row-cols-md-5 mt-4 g-2">
          {
            !loading
              ?
                <Skeleton number={5}/>
              :
                data.length > 0
                  &&
                    data.map((item, index) => {
                      return <TopTourItem key={index} data={item }/>
                    })
          }
        </div>
        <div className="text-end mt-3"><Link to="/tour" className="text-dark">See more tours <ArrowRightAltIcon sx={{color:'#6c6c6c'}}/></Link></div>
      </div>
    </div>
  )
}

export default TopTours;