import { Typography} from "@mui/material";
import { Message } from '@mui/icons-material';
import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/TipsAndArticlesSkeleton";
import TipsAndAtriclesItem from "./TipsAndArticleItem";

function TipsAndArticle () {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => { 
    request.get(
      '/blog',
      {
        params: { 
          limit:4
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
    <div className="py-5">
      <div className="container">
        <Typography variant="h6" component="h1" className="opacity-0d5">
          Recent Blog
        </Typography>
        <Typography variant="h4" component="h1">
          Tips & Articles
        </Typography>
        <div className="row mt-4">
          {
            !loading
              ?
                <Skeleton />
              :
                Array(4).fill(0).map((item,index) => {
                  return <TipsAndAtriclesItem key={index}/>
                })
          }
        </div>
      </div>
    </div>
  )
}

export default TipsAndArticle;