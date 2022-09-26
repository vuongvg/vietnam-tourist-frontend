import { Button } from "@mui/material";
import { spliceString } from "../../utils";

function TopTourItem ({data}) {
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
                  <h5>{data.title}</h5>
                </div>
                <div className="color-f85a59 fw-bold mb-3 mt-2">{data.price} VNĐ</div>
                <div>{spliceString(data.description,80)}</div>
                {/* <div className="border-top pt-3 mt-3 text-end">
                  <Button
                    size="small"
                    sx={{backgroundColor:'#f85a59', color:'white'}}
                  >
                    Discover
                  </Button>
                </div> */}
              </div>
            </div>
        </div>
    )
}

export default TopTourItem;