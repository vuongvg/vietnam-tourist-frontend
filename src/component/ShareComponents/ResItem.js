import { Button } from "@mui/material";
import { spliceString } from "../../utils";

function RestaurantItem ({data}) {
    return (
        <div className="col-12 col-sm-6 mb-4 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:`url(${data.avatar})`}}
                ></div>
              </div>
              <div className="p-3">
                <div className="d-flex justify-content-between mb-3">
                  <div className="fw-bold">{data.restaurantname}</div>
                </div>
                <div className="fs-0d9">{spliceString(data.description,80)}</div>
              </div>
            </div>
        </div>
    )
}

export default RestaurantItem;