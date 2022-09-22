import { Button } from "@mui/material";
import { Star, StarHalf } from '@mui/icons-material';
import { displayStars } from "../../utils";

function PopularHotelItem ({data}) {

    return (
        <div className="col mb-3 mb-md-0">
            <div className="border h-100">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:`url(${data.avatar})`}}
                ></div>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>{data.hotelname}</h5>
                </div>
                <div>
                  {
                    displayStars(data.evaluate).map((item, index) => {
                      if (item === 1) {
                        return <Star sx={{fontSize:15}}/>
                      } else {
                        return <StarHalf sx={{fontSize:15}}/>
                      }
                    })
                  }
                </div>
                <div className="fs-0d8 my-2">Rating</div>
                <div>Far far away, behind the word mountains, far from the countries</div>
                <div className="mt-3">4 days 3 nights</div>
                <div className="border-top pt-3 mt-3 text-end">
                  <Button
                    size="small"
                    sx={{backgroundColor:'#f85a59', color:'white'}}
                  >
                    Discover
                  </Button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default PopularHotelItem;