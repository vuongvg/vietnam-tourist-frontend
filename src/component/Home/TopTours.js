import { Typography } from "@mui/material";
import TopTourItem from "./TopTourItem";
import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/TopTourAndPopularHotelSkeleton";

function TopTours () {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => { 
    request.get(
      '/tour',
      {
        params: { 
          isfamous:'famous',
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
                <Skeleton />
              :
                Array(5).fill(0).map((item, index) => {
                  return <TopTourItem key={index}/>
                })
          }
        </div>
      </div>
    </div>
  )
}

export default TopTours;