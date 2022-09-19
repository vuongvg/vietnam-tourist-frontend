import { LocationOn, Call, Email  } from '@mui/icons-material';

function Footer () {
  return (
    <div className="text-white" style={{backgroundColor:'#222831', padding:'5rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <h4 className="mb-4">dirEngine</h4>
            <div className="color-ffffffb3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
          </div>
          <div className="col-6 col-md-3">
            <h4 className="mb-4">Information</h4>
            <div className="mb-3 color-ffffffb3">About</div>
            <div className="mb-3 color-ffffffb3">Terms and Conditions</div>
            <div className="mb-3 color-ffffffb3">Become a partner</div>
            <div className="mb-3 color-ffffffb3">Best Price Guarantee</div>
            <div className="mb-3 color-ffffffb3">Privacy and Policy</div>
          </div>
          <div className="col-6 col-md-3">
            <h4 className="mb-4">Customer Support</h4>
            <div className="mb-3 color-ffffffb3">FAQ</div>
            <div className="mb-3 color-ffffffb3">Payment Option</div>
            <div className="mb-3 color-ffffffb3">Booking Tips</div>
            <div className="mb-3 color-ffffffb3">How it works</div>
            <div className="mb-3 color-ffffffb3">Contact Us</div>
          </div>
          <div className="col-6 col-md-3">
            <h4 className="mb-4">Have a Questions?</h4>
            <div className="d-flex gap-3 mb-3">
              <LocationOn/>
              <div className="color-ffffffb3 text-break">203 Fake St. Mountain View, San Francisco, California, USA</div>
            </div>
            <div className="d-flex gap-3 mb-3">
              <Call/>
              <div className="color-ffffffb3 text-break">+2 392 3929 210</div>
            </div>
            <div className="d-flex gap-3 mb-3">
              <Email/>
              <div className="color-ffffffb3 text-break">info@yourdomain.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;