import { Star, StarHalf, AttachMoney } from '@mui/icons-material';
import { displayStars, spliceString, displayPrice } from "../../utils";
import { Link } from "react-router-dom";

function SearchItem ({data}) {

    return (
        <div className="col mb-4 text-start">
            <div className="border rounded overflow-hidden h-100">
              <Link to={`detail/${data.typePost}/${data._id}`}>
                <div className="ratio ratio-1x1">
                  <div 
                    className="bg-cover bg-norepeat bg-center" 
                    style={{backgroundImage:`url(${data.avatar.src})`}}
                  ></div>
                </div>
              </Link>
              <div className="p-3">
                <div className="d-flex justify-content-between mb-2">
                  <Link to={`detail/hotel/${data._id}`}>
                    <div className="fw-bold text-dark hover-underline">{spliceString(data.title, 50)}</div>
                  </Link>
                </div>
                <div className="mb-3 fs-0d8 fw-bold text-secondary">category: <span className='color-ecb00a'>{data.typePost}</span></div>
                {
                    data.typePost === "hotel"
                        &&
                            <>
                                <div className="d-flex justify-content-between mb-3">
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
                            </>
                }
                {
                    data.typePost === "tour"
                        &&
                            <>
                                <div className="d-flex mb-3 align-items-center">
                                    <AttachMoney fontSize="small"/>
                                    <div className="color-ecb00a fw-bold">{displayPrice(data.price)}</div>
                                </div>
                            </>
                }
                <div className="fs-0d9">{spliceString(data.description,50)}</div>
              </div>
            </div>
        </div>
    )
}

export default SearchItem;