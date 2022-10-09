import Skeleton from "../Skeleton/SideBarSkeleton";
import { useState, useEffect } from "react";
import request from "../../api";
import SideBarItem from "../ShareComponents/SideBarItem";

function SideBar ({idExclude}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        request.get(
            '/blog/',
            {
                params: {
                    limit: 6,
                    sort: {"title":"1"},
                    exclude: idExclude
                }
            }
        )
        .then((res) => {
            if (res.status === 200) {
                setLoading(true);
                setData(res.data);
            } else {
                
            }
        })
        .catch(() => {
            console.log("request failed");
        })
    }, []);

    return (
        <div className="col-12 col-md-3">
            <div className="mb-4">
                <div className="ps-2" style={{borderLeft:'5px solid #f85a59'}}>
                    <h4>Bài viết nổi bật</h4>
                </div>
            </div>
            {
                !loading
                    ?
                        <Skeleton />
                    :
                        data.length > 0
                            && 
                                data.map((item,index) => {
                                    return <SideBarItem item={item} key={index}/>
                                })
            }
            
        </div>
    )
}

export default SideBar;