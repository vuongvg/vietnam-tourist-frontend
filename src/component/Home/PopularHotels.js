import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/HotelSkeleton";
import PopularHotelItem from "../ShareComponents/HotelItem";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function PopularHotels() {
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);

   useEffect(() => {
      request
         .get("/hotel", {
            params: {
              filter:JSON.stringify({famous: true}),
               limit: 5,
            },
         })
         .then((res) => {
            if (res.status === 200) {
               setLoading(true);
               setData(res.data);
            } else {
            }
         })
         .catch(() => {
            console.log("request failed");
         });
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
               {!loading ? (
                  <Skeleton number={5} />
               ) : (
                  data.length > 0 &&
                  data.map((item, index) => {
                     return <PopularHotelItem key={index} data={item} />;
                  })
               )}
            </div>
            <div className="text-end mt-3">
               <Link to="/hotel" className="text-dark">
                  See more hotels & rooms <ArrowRightAltIcon sx={{ color: "#6c6c6c" }} />
               </Link>
            </div>
         </div>
      </div>
   );
}

export default PopularHotels;
