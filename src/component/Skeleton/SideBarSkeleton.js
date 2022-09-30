import { Skeleton } from "@mui/material";

function SkeletonItem () {
    return (
        <div className="mb-3 row w-100">
            <div className="col-4"><Skeleton className="ratio ratio-16x9 img-skeleton"/></div>
            <div className="col-8">
                <div><Skeleton width={'100%'}/></div>
                <div><Skeleton width={'100%'}/></div>
                <div><Skeleton width={'100%'}/></div>
            </div>
        </div>
    )
}

function SideBarSkeleton () {
    return (
        <>
            {
                Array(5).fill(0).map((item,index) => {
                    return <SkeletonItem key={index} />
                })
            }
        </>
    )
}

export default SideBarSkeleton;