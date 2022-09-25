import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/PopularRestaurantsSkeleton";
import PopularRestaurantItem from "./PopularRestaurantItem";

function PopularRestaurants () {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => { 
    request.get(
      '/restaurant',
      {
        params: { 
          isfamous:'famous',
          limit:4
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
  }, [])

  return (
    <div style={{backgroundColor:'#f9faff'}} className="py-5">
      <div className="container">
        <Typography variant="h6" component="h1" className="opacity-0d5">
          Special Offers
        </Typography>
        <Typography variant="h4" component="h1">
          Popular Restaurants
        </Typography>
        <div className="row mt-4">
          {
            !loading
              ?
                <Skeleton />
              :
                data.length > 0
                  && 
                    data.map((item,index) => {
                      return <PopularRestaurantItem key={index} data={item}/>
                    })
          }
        </div>
      </div>
    </div>
  )
}

export default PopularRestaurants;