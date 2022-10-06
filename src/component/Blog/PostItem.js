import { Message } from "@mui/icons-material";

function PostItem () {
    return (
        <div className="col-12 col-sm-6 mb-4 col-md-3">
            <div className="border">
                <div className="ratio ratio-1x1">
                <div 
                    className="bg-cover bg-norepeat bg-center" 
                    style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
                </div>
                <div className="p-3">
                <h4>8 Best homestay in Philippines that you don't miss out</h4>
                <div className="mt-3 mb-2">August 12, 2018</div>
                <div>
                    <Message /> 5
                </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;