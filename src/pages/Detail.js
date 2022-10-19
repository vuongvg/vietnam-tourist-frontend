import DetailContent from "../component/Detail/DetailContent";
import SideBar from "../component/Detail/SideBar";
import { useLocation } from "react-router-dom";

function Detail () {

  const { pathname } = useLocation();
   const urlPath = pathname.split("/");

  return (
    <div className="container mb-5" style={{paddingTop:'10rem'}}>
      <div className="row">
        <div className="col-12 col-md-9">
          <DetailContent detailType={urlPath[2]} idPost={urlPath[3]}/>
        </div>
        <div className="col-12 col-md-3">
          <SideBar detailType={urlPath[2]} idPost={urlPath[3]}/>
        </div>
      </div>
    </div>
  )
}

export default Detail;