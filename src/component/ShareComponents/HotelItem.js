import { Star, StarHalf } from '@mui/icons-material';
import { displayStars, spliceString } from "../../utils";
import { Link } from "react-router-dom";

function HotelItem ({data}) {
  return (
    <div className="col mb-4 text-start">
        <div className="border rounded overflow-hidden h-100">
          <Link to={`detail/hotel/${data._id}`}>
            <div className="ratio ratio-1x1">
              <div 
                className="bg-cover bg-norepeat bg-center" 
                style={{backgroundImage:`url(${data.avatar.src})`}}
              ></div>
            </div>
          </Link>
          <div className="p-3">
            <div className="d-flex justify-content-between">
              <Link to={`detail/hotel/${data._id}`}>
                <h5 className="text-dark hover-underline fw-bold">{spliceString(data.title,30)}</h5>
              </Link>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div>
                {
                  displayStars(data.evaluate).map((item, index) => {
                    if (item === 1) {
                      return <Star sx={{fontSize:15}} key={index} className="color-ecb00a"/>
                    } else {
                      return <StarHalf sx={{fontSize:15}} key={index} className="color-ecb00a"/>
                    }
                  })
                }
              </div>
              <div className="fs-0d8">Rating</div>
            </div>
            <div className="fs-0d9">{spliceString(data.description,80)}</div>
          </div>
        </div>
    </div>
  )
}

export default HotelItem;