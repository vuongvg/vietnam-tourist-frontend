import { Skeleton } from "@mui/material";
import { Message } from "@mui/icons-material";

function SkeletonItem () {
    return (
        <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
                <Skeleton className="img-skeleton ratio ratio-4x3"/>
                <div className="p-3">
                    <Skeleton height={40}/>
                    <Skeleton height={40}/>
                    <Skeleton height={40}/>
                    <Skeleton height={30} width={'50%'}/>
                    <div className="d-flex align-items-center justify-content-start">
                        <Message />
                        <Skeleton height={30} width={'10%'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TipsAndArticlesSkeleton () {
    return (
        <>
            {
                Array(4).fill(0).map((item, index) => {
                    return <SkeletonItem key={index}/>
                })
            }
        </>
    )
}

export default TipsAndArticlesSkeleton;