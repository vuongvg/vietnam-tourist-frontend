import Filter from "../component/Hotels/Filter";
import HotelList from "../component/Hotels/HotelList";
import Banner from "../component/Hotels/Banner";

function Hotel() {
  return (
    <div>
      <Banner />
      <div className="container">
        <div className="row" style={{ padding:'5rem 0' }}>
          <div className="col-12 col-md-3 mb-5">
            <Filter />
          </div>
          <div className="col-12 col-md-9">
            <HotelList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel;