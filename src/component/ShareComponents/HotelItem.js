import { Button } from "@mui/material";
import { Star, StarHalf } from '@mui/icons-material';
import { displayStars } from "../../utils";
import { Link } from "react-router-dom";

function HotelItem ({data}) {

    return (
        <div className="col mb-4 text-start">
            <div className="border rounded overflow-hidden h-100">
              <Link to={`detail/hotel/${data._id}`}>
                <div className="ratio ratio-1x1">
                  <div 
                    className="bg-cover bg-norepeat bg-center" 
                    style={{backgroundImage:`url(${data.avatar})`}}
                  ></div>
                </div>
              </Link>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <Link to={`detail/hotel/${data._id}`}>
                    <div className="fw-bold text-dark color-hover-f85a59">{data.hotelname}</div>
                  </Link>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <div>
                    {
                      displayStars(data.evaluate).map((item, index) => {
                        if (item === 1) {
                          return <Star sx={{fontSize:15}} key={index}/>
                        } else {
                          return <StarHalf sx={{fontSize:15}} key={index}/>
                        }
                      })
                    }
                  </div>
                  <div className="fs-0d8">Rating</div>
                </div>
                <div className="fs-0d9">Far far away, behind the word mountains, far from the countries</div>
              </div>
            </div>
        </div>
    )
}

export default HotelItem;