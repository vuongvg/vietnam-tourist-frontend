import { spliceString } from "../../utils";
import AddCommentIcon from '@mui/icons-material/AddComment';

function FeaturedDestinationItem ({data}) {
  return (
    <div className="px-2 pb-3">
      <div className="border">
        <div className="ratio ratio-1x1">
          <div 
            className="bg-cover bg-norepeat bg-center" 
            style={{backgroundImage:`url(${data.avatar})`}}
          ></div>
        </div>
        <div className="p-3">
          <h4>{data.title}</h4>
          <div className="mt-3">{spliceString(data.description,80)} <AddCommentIcon className="color-f85a59" sx={{ fontSize:'1rem', transform:'rotateY(180deg)' }}/></div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedDestinationItem;