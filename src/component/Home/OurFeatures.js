import { Grade, Favorite, SupervisorAccount, SupportAgent } from '@mui/icons-material';

function OurFeatures () {
    return (
        <div style={{backgroundColor:'#f9faff'}} className="py-5">
            <div className="col-8 m-auto d-flex gap-4">
                <div className="text-center py-5 px-4 bg-white">
                    <Grade className="mb-3 color-f85a59" sx={{ fontSize: 50 }}/>
                    <h4>Best Price Guarantee</h4>
                    <div>A small river named Duden flows by their place and supplies.</div>
                </div>
                <div className="text-center py-5 px-4 bg-white">
                    <Favorite className="mb-3 color-f85a59" sx={{ fontSize: 50 }}/>
                    <h4>Travellers Love Us</h4>
                    <div>A small river named Duden flows by their place and supplies.</div>
                </div>
                <div className="text-center py-5 px-4 bg-white">
                    <SupervisorAccount className="mb-3 color-f85a59" sx={{ fontSize: 50 }}/>
                    <h4>Best Travel Agent</h4>
                    <div>A small river named Duden flows by their place and supplies.</div>
                </div>
                <div className="text-center py-5 px-4 bg-white">
                    <SupportAgent className="mb-3 color-f85a59" sx={{ fontSize: 50 }}/>
                    <h4>Our Dedicated Support</h4>
                    <div>A small river named Duden flows by their place and supplies.</div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures;