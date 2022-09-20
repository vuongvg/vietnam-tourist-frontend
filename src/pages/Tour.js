import Filter from "../component/Tour/Filter";
import TourList from "../component/Tour/TourList";
import PageBanner from "../component/ShareComponents/PageBanner";
import Banner from "../images/tourbanner.jpeg";

function Tour() {
  return (
    <div>
      <PageBanner image={Banner} page='Travel Blog'/>
      <div className="container">
        <div className="row" style={{ padding:'5rem 0' }}>
          <div className="col-12 col-md-3 mb-5">
            <Filter />
          </div>
          <div className="col-12 col-md-9">
            <TourList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tour