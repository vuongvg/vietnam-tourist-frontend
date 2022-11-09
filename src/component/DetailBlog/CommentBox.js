import { useState, useEffect } from "react";
import { SkeletonBox } from "../Skeleton/CommentSkeleton";
import { Button, TextareaAutosize } from "@mui/material";
import request from "../../api";

function CommentBox ({idPost}) {

    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);
    const [isEmptyComment, setIsEmptyComment] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    //     request.get(
    //       `/blog/${idPost}`
    //     )
    //     .then((res) => {
    //       console.log(res);
    //         if (res.status === 200) {
    //           setLoading(true);
    //           setContent(res.data);
    //       } else {
              
    //       }
    //     })
    //     .catch(() => {
    //         console.log("request failed");
    //     })
    }, []);

    useEffect(() => {
        // request.post(
        //     `/blog/${idPost}`
        // )
        // .then((res) => {
        //     console.log(res);
        //     if (res.status === 200) {
        //         setLoading(true);
        //         setContent(res.data);
        //     } else {
            
        //     }
        // })
        // .catch(() => {
        //     console.log("request failed");
        // })
    }, []);

    const handleSendComment = () => {
        if (!comment) {
            setIsEmptyComment(false);
        } else {
            setIsEmptyComment(true);
        }
    }

    const handleCommentChange = (event) => {
        if (!event.target.value) {
            setIsEmptyComment(false);
        } else {
            setIsEmptyComment(true);
        }

        setComment(event.target.value);
    }

    return (
        <div>
            <h5 className="fw-bold">Comment</h5>
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
                    <div hidden={isEmptyComment} className="color-f85a59 fs-0d8 fw-bold mt-1">Please enter comment!</div>
                </div>
                <div className="col-12 col-md-4 text-start">
                    <Button variant="contained" size="medium" onClick={handleSendComment}>Send</Button>
                </div>
            </div>
            <div className="mt-3">
                <SkeletonBox/>
            </div>
        </div>
    )
}

export default CommentBox;