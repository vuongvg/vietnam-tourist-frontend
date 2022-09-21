function FeaturedDestinationItem () {
  return (
    <div className="px-2 pb-3">
      <div className="border">
        <div className="ratio ratio-1x1">
          <div 
            className="bg-cover bg-norepeat bg-center" 
            style={{backgroundImage:'url(https://preview.colorlib.com/theme/direngine/images/xdestination-2.jpg.pagespeed.ic.RMg1c-upbN.webp)'}}
          ></div>
        </div>
        <div className="p-3">
          <h4>San Francisco, USA</h4>
          <div className="mt-3">15 Listing</div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedDestinationItem;