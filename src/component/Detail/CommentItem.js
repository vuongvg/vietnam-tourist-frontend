import { convertDateForm } from "../../utils";

function CommentItem ({data}) {
    return (
        <div className="mt-3">
            <div className="fw-bold">{data.createBy.username}</div>
            <div className="ps-3">
                <div className="mt-2">{data.comment}</div>
                <div className="fs-0d8 color-c4 mt-2">{convertDateForm(data.updatedAt)}</div>
            </div>
        </div>
    )
}

export default CommentItem;