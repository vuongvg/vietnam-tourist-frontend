import { Typography, Button } from "@mui/material";
import { Message } from '@mui/icons-material';

function TipsAndArticle () {
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
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>8 Best homestay in Philippines that you don't miss out</h4>
                <div className="mt-3 mb-2">August 12, 2018</div>
                <div>
                  <Message /> 5
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>8 Best homestay in Philippines that you don't miss out</h4>
                <div className="mt-3 mb-2">August 12, 2018</div>
                <div>
                  <Message /> 5
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>8 Best homestay in Philippines that you don't miss out</h4>
                <div className="mt-3 mb-2">August 12, 2018</div>
                <div>
                  <Message /> 5
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4 mb-md-0 col-md-3">
            <div className="border">
              <div className="ratio ratio-1x1">
                <div 
                  className="bg-cover bg-norepeat bg-center" 
                  style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-1.jpg.pagespeed.ic.cH7KihJSx6.webp)'}}
                ></div>
              </div>
              <div className="p-3">
                <h4>8 Best homestay in Philippines that you don't miss out</h4>
                <div className="mt-3 mb-2">August 12, 2018</div>
                <div>
                  <Message /> 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TipsAndArticle;