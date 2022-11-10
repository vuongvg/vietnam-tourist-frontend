import { useState, useEffect } from "react";
import { SkeletonBox } from "../Skeleton/CommentSkeleton";
import { Button, TextareaAutosize } from "@mui/material";
import request from "../../api";
import CommentItem from "./CommentItem";

function CommentBox({ idPost }) {

  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [commentErr, setCommentErr] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(0);
  const [pagecommentdisplayed, setPagecommentdisplayed] = useState(1);
  const [showMoreComment, setShowMoreComment] = useState(true);

  useEffect(() => {
    request.get(
      `/comment`,
      {
        params:{
          postid: idPost,
          limit: 100,
          page: 1
        }
      }
    )
      .then((res) => {
        if (res.status === 200)
        {
          setIsLoading(false);
          setCommentList(res.data.reverse());
          setCommentCount(res.headers['x-total-count'])
        } else {

        }
      })
      .catch(() => {
        console.log("request failed");
      })
  }, []);

  const handleSendComment = () => {
    if (!comment)
    {
      setCommentErr("Please enter comment");
    } else {
      setCommentErr('');

      request.post(
          `/comment`,
          {
            idPost:idPost,
            comment:comment
          }
      )
      .then((res) => {
        if (res.status === 200) {
          const list = commentList.reverse().push(res.data);
          commentList.splice(list);
        } else {
          setCommentErr("Sending comment failed!")
        }
      })
      .catch((err) => {
        if (err?.response?.data === "Authorization failed") {
          setCommentErr("Session has been expired! Please re-login to send message" );
        }
      });
    }
  }

  const handleCommentChange = (event) => {
    if (!event.target.value)
    {
      setCommentErr("Please enter comment!");
    } else
    {
      setCommentErr("");
    }

    setComment(event.target.value);
  }

  const handleSeeMoreComment = () => {
    setPagecommentdisplayed(prev => prev + 1);
    if (commentList.length < pagecommentdisplayed*5) {
      setShowMoreComment(false);
    }
  }

  return (
    <div>
      <h5 className="fw-bold mt-3">{`Comment (${commentCount})`}</h5>
      <div className="row mt-3">
        <div className="col-12 col-md-8">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Enter your comments"
            style={{ width: '100%' }}
            className="border rounded px-2 pt-2"
            onChange={handleCommentChange}
          />
          <div className="color-f85a59 fs-0d8 fw-bold">{commentErr}</div>
        </div>
        <div className="col-12 col-md-4 text-start">
          <Button variant="contained" size="medium" onClick={handleSendComment}>Send</Button>
        </div>
      </div>
      <div className="mt-3">
        {
          isLoading
            ?
              <SkeletonBox />
            :
              commentList.length > 0
                &&
                  commentList.map((item,index) => {
                    if (index < 5*pagecommentdisplayed ) {
                      return <CommentItem key={index} data={item}/>
                    }
                  })
        }
      </div>
      <div className="mt-4" hidden={!showMoreComment}>
        <Button
          variant="outlined" 
          size="small"
          className="rounded-pill"
          sx={{color:"#888", borderColor:"#888"}}
          onClick={handleSeeMoreComment}
        >Xem thêm</Button>
      </div>
    </div>
  )
}

export default CommentBox;