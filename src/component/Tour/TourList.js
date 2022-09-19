import TourItem from '../ShareComponents/HotelItem';

function TourList () {
  return (
    <div className="row row-cols-1 row-cols-lg-3">
      {
        Array(9).fill(0).map((item, index) => {
          return <TourItem />
        })
      }
    </div>
  )
}

export default TourList;