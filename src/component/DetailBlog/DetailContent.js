import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/DetailBlogSkeleton";

function DetailContent () {

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request.get(
      '/blog/63310ae8c894be068fe83640'
    )
    .then((res) => {
      console.log(res);
        if (res.status === 200) {
          setLoading(true);
          setContent(res.data._doc);
        } else {
            
        }
    })
    .catch(() => {
        console.log("request failed");
    })
  }, [])

  return (
    <div>
      {
        !loading
          ?
            <Skeleton/>
          :
            content 
              &&
              <>
                <div className="ratio  ratio-21x9 bg-center bg-cover bg-norepeat mb-4" style={{backgroundImage:`url(${content.avatar})`}}></div>
                <h2>{content.title}</h2>
                <div className="product-content" dangerouslySetInnerHTML={{__html: content.content}}></div>
              </>
      }
    </div>
  )
}

export default DetailContent;