import { TextField, Button } from "@mui/material";

function SubscribeNewsletter () {
    return (
        <div className="text-white text-center" style={{background:'linear-gradient(135deg, #2ebdc4 0%, #68e5b2 100%)', padding:'8rem 0'}}>
            <h2>Subcribe to our Newsletter</h2>
            <div className="mt-4 mb-5 col-10 col-md-5 m-auto">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</div>
            <div className="d-flex align-items-center justify-content-center px-3 px-sm-0">
                <input style={{height:'4rem', width:'18rem'}} className="px-4 border border-white" placeholder='Enter email address'/>
                <Button 
                    variant="contained"
                    className="px-4 search-box box-shadow-none border border-white"
                    sx={{backgroundColor:'transparent', borderRadius:0, height:'4rem'}}
                >
                    Subscribe
                </Button>
            </div>
        </div>
    )
}

export default SubscribeNewsletter;