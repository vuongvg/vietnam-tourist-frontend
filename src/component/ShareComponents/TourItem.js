import { spliceString, displayPrice } from "../../utils";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Link } from "react-router-dom";

function TopTourItem ({data}) {
    return (
        <div className="col mb-4">
            <div className="border h-100">
              <Link to={`/detail/tour/${data._id}`}>
                <div className="ratio ratio-1x1">
                  <div 
                    className="bg-cover bg-norepeat bg-center" 
                    style={{backgroundImage:`url(${data.avatar.src})`}}
                  ></div>
                </div>
              </Link>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <Link to={`/detail/tour/${data._id}`}>
                    <h5 className="text-dark hover-underline fw-bold">{spliceString(data.title, 45)}</h5>
                  </Link>
                </div>
                <div className="d-flex mb-3 mt-2 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <AttachMoneyIcon fontSize="small"/>
                    <div className="color-ecb00a fw-bold">{displayPrice(data.price)}</div>
                  </div>
                  {
                    data.regularPrice && data.regularPrice > data.price
                      ?
                        <div className="text-line-through color-f85a59">{data.regularPrice}</div>
                      :
                        null
                  }
                </div>
                <div>{spliceString(data.description,80)}</div>
              </div>
            </div>
        </div>
    )
}

export default TopTourItem;