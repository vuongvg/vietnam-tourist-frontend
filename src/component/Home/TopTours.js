import { Typography } from "@mui/material";
import TopTourItem from "./TopTourItem";
import { useState, useEffect } from "react";

function TopTours () {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, [])

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