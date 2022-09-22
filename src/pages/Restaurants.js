import Filter from "../component/Restaurants/Filter";
import ResList from "../component/Restaurants/ResList";
import PageBanner from "../component/ShareComponents/PageBanner";
import Banner from "../images/tourbanner.jpeg";

function Restaurant() {
  return (
    <div>
      <PageBanner image={Banner} page='Restaurant'/>
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