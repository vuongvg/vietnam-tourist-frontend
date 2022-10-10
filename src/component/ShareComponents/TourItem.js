import { Button } from "@mui/material";
import { spliceString, displayPrice } from "../../utils";
import { Link } from "react-router-dom";

function TopTourItem ({data}) {
    return (
        <div className="col mb-4">
            <div className="border h-100">
              <Link to={`detail/tour/${data._id}`}>
                <div className="ratio ratio-1x1">
                  <div 
                    className="bg-cover bg-norepeat bg-center" 
                    style={{backgroundImage:`url(${data.avatar})`}}
                  ></div>
                </div>
              </Link>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <Link to={`detail/tour/${data._id}`}>
                    <h5 className="text-dark color-hover-f85a59">{data.title}</h5>
                  </Link>
                </div>
                <div className="color-f85a59 fw-bold mb-3 mt-2">{displayPrice(data.price)}</div>
                <div>{spliceString(data.description,80)}</div>
              </div>
            </div>
        </div>
    )
}

export default TopTourItem;