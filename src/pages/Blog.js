import PageBanner from "../component/ShareComponents/PageBanner";
import PostList from "../component/Blog/PostList";
import Banner from "../images/tourbanner.jpeg";

function Blog() {
  return (
    <div>
      <PageBanner image={Banner} page='Travel Blog'/>
      <div className="container">
        <PostList />
      </div>
    </div>
  )
}

export default Blog