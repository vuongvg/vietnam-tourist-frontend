import { Typography, Button } from "@mui/material";
import { Star, StarHalf } from '@mui/icons-material';
import { useState, useEffect } from "react";
import request from "../../api";

function PopularRestaurants () {

  useEffect(() => {
    
  }, []);

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
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>Sen Tay Ho</h5>
                  <div>$300</div>
                </div>
                <div>
                  <Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><StarHalf sx={{fontSize:15}}/>
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
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>Sen Tay Ho</h5>
                  <div>$200</div>
                </div>
                <div>
                  <Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><StarHalf sx={{fontSize:15}}/>
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
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>Sen Tay Ho</h5>
                  <div>$200</div>
                </div>
                <div>
                  <Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><StarHalf sx={{fontSize:15}}/>
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
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5>Sen Tay Ho</h5>
                  <div>$200</div>
                </div>
                <div>
                  <Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><Star sx={{fontSize:15}}/><StarHalf sx={{fontSize:15}}/>
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
        </div>
      </div>
    </div>
  )
}

export default PopularRestaurants;