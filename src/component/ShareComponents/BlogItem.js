import { Message, AccessTime } from "@mui/icons-material";
import { spliceString, transferDate } from "../../utils";

function TipsAndAtriclesItem ({data}) {
    return (
        <div className="col-12 col-sm-6 mb-4 col-md-3">
            <div className="border h-100">
                <div className="ratio ratio-1x1">
                <div 
                    className="bg-cover bg-norepeat bg-center" 
                    style={{backgroundImage:`url(${data.avatar})`}}
                ></div>
                </div>
                <div className="p-3">
                <h4>{spliceString(data.title,80)}</h4>
                <div className="mt-3 mb-2 align-items-center d-flex fs-0d8"><AccessTime className="me-2" sx={{fontSize:20}}/> {transferDate(data.updatedAt)}</div>
                <div>
                    {
                        data.comment
                            ?
                                <>
                                    <Message /> {data.comment}
                                </>
                            :
                                ''
                    }
                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default TipsAndAtriclesItem;