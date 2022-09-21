import { Skeleton } from "@mui/material";

function PopularRestaurantsSkeletonItem () {
    return (
        <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
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

function PopularRestaurantsSkeleton () {
    return (
        <>
            {
                Array(5).fill(0).map((item, index) => {
                    return PopularRestaurantsSkeletonItem
                })
            }
        </>
    )
}

export default PopularRestaurantsSkeleton;