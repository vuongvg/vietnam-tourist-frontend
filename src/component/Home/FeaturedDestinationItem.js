import { spliceString } from "../../utils";
import { Link } from "react-router-dom";
import AddCommentIcon from '@mui/icons-material/AddComment';

function FeaturedDestinationItem ({data}) {
  return (
    <div className="px-2 pb-3">
      <div className="border">
          <Link to={`detail/loaction/${data._id}`}>
            <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:`url(${data.avatar.src})`}}
                ></div>
            </div>
          </Link>
          <div className="p-3">
            <Link to={`detail/loaction/${data._id}`}>
              <h5 className="text-dark hover-underline">{spliceString(data.title,17)}</h5>
            </Link>
            <div className="mt-3">{spliceString(data.description,80)} <AddCommentIcon className="color-f85a59" sx={{ fontSize:'1rem', transform:'rotateY(180deg)' }}/></div>
          </div>
      </div>
    </div>
  )
}

export default FeaturedDestinationItem;