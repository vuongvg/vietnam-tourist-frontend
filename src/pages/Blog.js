import PageBanner from "../component/ShareComponents/PageBanner";
import Banner from "../images/tourbanner.jpeg";
import PostList from "../component/Blog/PostList";

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