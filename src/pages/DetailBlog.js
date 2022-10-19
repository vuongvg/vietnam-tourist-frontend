import SideBar from "../component/DetailBlog/SideBar";
import DetailContent from "../component/DetailBlog/DetailContent";
import { useLocation } from "react-router-dom";

function DetailBlog () {
    console.log('render');
    const { pathname } = useLocation();
    const urlPath = pathname.split("/");

    return (
        <div className="container mb-5" style={{paddingTop:'10rem'}}>
            <div className="row">
                <SideBar idExclude={urlPath[3]}/>
                <div className="col-9">
                    <DetailContent idPost={urlPath[3]}/>
                </div>
            </div>
        </div>
    )
}

export default DetailBlog; 