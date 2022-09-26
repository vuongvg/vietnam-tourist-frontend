import { Typography} from "@mui/material";
import { Message } from '@mui/icons-material';
import { useState, useEffect } from "react";
import request from "../../api";
import Skeleton from "../Skeleton/TipsAndArticlesSkeleton";
import TipsAndAtriclesItem from "./TipsAndArticleItem";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
                data 
                  &&
                    data.map((item,index) => {
                      return <TipsAndAtriclesItem key={index} data={item}/>
                    })
          }
        </div>
        <div className="text-end mt-3"><Link to="/blog" className="text-dark">read more posts<ArrowRightAltIcon sx={{color:'#6c6c6c'}}/></Link></div>
      </div>
    </div>
  )
}

export default TipsAndArticle;