import { SkeletonBox } from "../Skeleton/CommentSkeleton";
import { Button, TextareaAutosize } from "@mui/material";

function CommentBox () {
    return (
        <div>
            <h5 className="fw-bold">Comment</h5>
            <div className="row">
                <div className="">

                </div>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    style={{ width: 200 }}
                />
                <Button variant="contained" size="small">Send</Button>
            </div>
            <SkeletonBox />
        </div>
    )
}

export default CommentBox;