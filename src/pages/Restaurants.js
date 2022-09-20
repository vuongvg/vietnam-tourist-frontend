import Filter from "../component/Restaurants/Filter";
import ResList from "../component/Restaurants/ResList";
import Banner from "../component/Restaurants/Banner";

function Restaurant() {
  return (
    <div>
      <Banner />
      <div className="container">
        <div className="row" style={{ padding:'5rem 0' }}>
          <div className="col-12 col-md-3 mb-5">
            <Filter />
          </div>
          <div className="col-12 col-md-9">
            <ResList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant;