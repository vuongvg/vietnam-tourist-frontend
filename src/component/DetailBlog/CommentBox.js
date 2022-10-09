import { SkeletonBox } from "../Skeleton/CommentSkeleton";
import { Button, TextareaAutosize } from "@mui/material";

function CommentBox () {
    return (
        <div>
            <h5 className="fw-bold">Comment</h5>
            <div className="row mt-3">
                <div className="col-12 col-md-8">
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Enter your comments"
                        style={{ width: '100%' }}
                        className="border rounded px-2 pt-2"
                    />
                </div>
                <div className="col-12 col-md-4 text-start">
                    <Button variant="contained" size="medium">Send</Button>
                </div>
            </div>
            <div className="mt-3">
                <SkeletonBox />
            </div>
        </div>
    )
}

export default CommentBox;