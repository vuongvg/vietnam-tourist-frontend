import PageBanner from '../component/ShareComponents/PageBanner';
import Banner from "../images/tourbanner.jpeg";
import MainFeatures from '../component/About/MainFeatures';
import FAQS from '../component/About/FAQS';

function About() {
  return (
    <div>
      <PageBanner image={Banner} page='About Us'/>
      <MainFeatures />
      <FAQS />
    </div>
  )
}

export default About;