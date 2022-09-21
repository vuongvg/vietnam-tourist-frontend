import TourItem from '../ShareComponents/HotelItem';
import Pagination from '../ShareComponents/Pagination';

function TourList () {
  return (
    <div>
      <div className="row row-cols-1 row-cols-lg-3">
        {
          Array(9).fill(0).map((item, index) => {
            return <TourItem />
          })
        }
      </div>
      <div className="text-center col-12">
        <Pagination itemsPerPage={5}/>
      </div>
    </div>
  )
}

export default TourList;