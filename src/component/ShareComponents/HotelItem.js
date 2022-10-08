import { Button } from "@mui/material";
import { Star, StarHalf } from '@mui/icons-material';
import { displayStars } from "../../utils";

function HotelItem ({data}) {

    return (
        <div className="col mb-4">
            <div className="border h-100">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:`url(${data.avatar})`}}
                ></div>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <div className="fw-bold">{data.hotelname}</div>
                </div>
                <div className="d-flex justify-content-between">
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
                  <div className="fs-0d8 mb-3">Rating</div>
                </div>
                <div className="fs-0d9">Far far away, behind the word mountains, far from the countries</div>
              </div>
            </div>
        </div>
    )
}

export default HotelItem;