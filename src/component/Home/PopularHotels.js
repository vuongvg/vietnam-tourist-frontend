import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import request from "../../api";
import PopularHotelsSkeleton from "../Skeleton/TopTourAndPopularHotelSkeleton";
import PopularHotelItem from "./PopularHotelItem";

function PopularHotels () {

  const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

    useEffect(() => {
        request.get(
          '/hotel',
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
    <div className="py-5">
      <div className="container">
        <Typography variant="h6" component="h1" className="opacity-0d5">
          Special Offers
        </Typography>
        <Typography variant="h4" component="h1">
          Popular Hotels & Rooms
        </Typography>
        <div className="row row-cols-2 row-cols-md-5 mt-4 g-2">
          {
            !loading 
              ?
                <PopularHotelsSkeleton />
              :
                data.map((item, index) => {
                  return <PopularHotelItem key={index} data={item}/>
                })
          }
        </div>
      </div>
    </div>
  )
}

export default PopularHotels;