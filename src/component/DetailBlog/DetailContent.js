import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/DetailBlogSkeleton";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { convertDateForm } from "../../utils";
import CommentBox from "../../component/DetailBlog/CommentBox";

function DetailContent ({idPost}) {

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
      request.get(
        `/blog/${idPost}`
      )
      .then((res) => {
          if (res.status === 200) {
            setLoading(true);
            setContent(res.data);
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
                <div className="ratio  ratio-21x9 bg-center bg-cover bg-norepeat mb-4" style={{backgroundImage:`url(${content.avatar?.src})`}}></div>
                <h2>{content.title}</h2>
                <div className="d-flex align-items-center mb-3 mt-3 text-secondary">
                  <AccessTimeIcon fontSize="small"/>
                  <div className="ms-2">{convertDateForm(content.updatedAt)}</div>
                </div>
                <div>{content.description}</div>
                <div className="product-content mt-3" dangerouslySetInnerHTML={{__html: content.content}}></div>
                <div className="mt-3">
                  <CommentBox />
                </div>
              </>
      }
    </div>
  )
}

export default DetailContent;