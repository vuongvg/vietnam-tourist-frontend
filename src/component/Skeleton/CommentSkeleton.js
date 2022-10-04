import { Skeleton } from "@mui/material";

function SkeletonItem () {
    return (
        <div className="d-flex align-items-center mb-3">
            <Skeleton variant="circular" width={50} height={50} />
            <div className="ms-2 w-100">
                <Skeleton width={'70%'}/>
                <Skeleton width={'70%'}/>
                <Skeleton width={'70%'}/>
            </div>
        </div>
    )
}

function SkeletonBox () {
    return (
        <div>
            {
                Array(3).fill(0).map((item, index) => {
                    return <SkeletonItem key={index}/>
                })
            }
        </div>
    )
}

export {SkeletonItem, SkeletonBox};