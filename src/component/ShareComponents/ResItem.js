import { spliceString } from "../../utils";
import { Link } from "react-router-dom";

function RestaurantItem ({data}) {
    return (
        <div className="col-12 col-sm-6 mb-4 col-md-3">
            <div className="border rounded h-100">
              <Link to={`/detail/restaurant/${data._id}`}>
                <div className="ratio ratio-1x1">
                  <div 
                    className="bg-cover bg-norepeat bg-center" 
                    style={{backgroundImage:`url(${data.avatar.src})`}}
                  ></div>
                </div>
              </Link>
              <div className="p-3">
                <div className="d-flex justify-content-between mb-3">
                  <Link to={`/detail/restaurant/${data._id}`}>
                    <h5 className="text-dark hover-underline fw-bold">{spliceString(data.title,17)}</h5>
                  </Link>
                </div>
                <div className="fs-0d9">{spliceString(data.description,80)}</div>
              </div>
            </div>
        </div>
    )
}

export default RestaurantItem;