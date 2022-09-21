import { Skeleton } from "@mui/material";

function SkeletonItem () {
  return (
    <div className="col-12 col-md-3">
      <div className="border">
        <Skeleton className="img-skeleton ratio ratio-4x3"/>
        <div className="p-3">
          <Skeleton height={40}/>
          <Skeleton width={'20%'}/>
        </div>
      </div>
    </div>
  )
}

function FeaturedDestinationsSkeleton () {
  return (
    <div className="row mt-4">
      {
        Array(4).fill(0).map((item, index) => {
          return <SkeletonItem />
        })
      }
    </div>
  )
}

export default FeaturedDestinationsSkeleton;