import { Skeleton } from "@mui/material";

function DetailBlogSkeleton () {
    return (
        <div>
            <Skeleton className="ratio ratio-21x9 img-skeleton mb-3"/>
            <Skeleton height={40}/>
            <Skeleton height={40}/>
            <Skeleton height={40} width={'90%'} className="mb-4"/>
            {
                Array(20).fill(0).map((item, index) => {
                    return <Skeleton height={30} key={index}/>
                })
            }
        </div>
    )
}

export default DetailBlogSkeleton;