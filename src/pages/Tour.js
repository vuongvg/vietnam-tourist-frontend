import Filter from "../component/Tour/Filter";
import TourList from "../component/Tour/TourList";
import Banner from "../component/Tour/Banner";

function Tour() {
  return (
    <div>
      <Banner />
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