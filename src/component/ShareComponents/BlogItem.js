import { Message, AccessTime } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { spliceString, convertDateForm } from "../../utils";

function TipsAndAtriclesItem ({data}) {
    return (
        <div className="col-12 col-sm-6 mb-4 col-md-3">
            <div className="border h-100">
                <Link to={`detail/blog/${data._id}`}>
                    <div className="ratio ratio-1x1">
                        <div 
                            className="bg-cover bg-norepeat bg-center" 
                            style={{backgroundImage:`url(${data.avatar.src})`}}
                        ></div>
                    </div>
                </Link>
                <div className="p-3">
                <Link to={`detail/blog/${data._id}`}>
                    <h5  className="text-dark hover-underline fw-bold">{spliceString(data.title,50)}</h5>
                </Link>
                <div className="mt-4 align-items-center d-flex fs-0d8"><AccessTime className="me-2" sx={{fontSize:20}}/> {convertDateForm(data.updatedAt)}</div>
                <div className="mt-3">{spliceString(data.description,50)}</div>
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