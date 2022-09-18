import Banner from '../component/Home/Banner';
import OurFeatures from '../component/Home/OurFeatures';
import FeaturedDestination from '../component/Home/FeaturedDestination';
import TopTours from '../component/Home/TopTours';
import PopularHotels from '../component/Home/PopularHotels';
import PopularRestaurants from '../component/Home/PopularRestaurants';
import TipsAndArticle from '../component/Home/TipsAndArticle';

function Home() {
  return (
    <div>
      <Banner />
      <OurFeatures />
      <FeaturedDestination />
      <TopTours />
      <PopularHotels />
      <PopularRestaurants />
      <TipsAndArticle />
    </div>
  )
}

export default Home;