import { Skeleton } from "@mui/material";

function SkeletonItem () {
    return (
        <div className="col mb-4">
            <div className="border rounded">
                <Skeleton className="ratio ratio-4x3 img-skeleton"/>
                <div className="p-3">
                    <div className="d-flex justify-content-between">
                    <Skeleton width={'60%'} height={30}/>
                    <Skeleton width={'20%'} height={30}/>
                    </div>
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                    <Skeleton height={30}/>
                    <Skeleton width={'60%'} height={30}/>
                </div>
            </div>
        </div>
    )
}

function SkeletonGroup ({number}) {
    return (
        <>
            {
                Array(number).fill(0).map((item, index) => {
                    return <SkeletonItem key={index}/>
                })
            }
        </>
    )
}

export default SkeletonGroup;