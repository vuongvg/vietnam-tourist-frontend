import Banner from "../component/Contact/Banner";
import { Button } from "@mui/material";

function Contact() {
  return (
    <div>
      <Banner />
      <div className="col-12 col-md-8 m-auto" style={{ padding:'5rem 0' }}>
        <div className="row px-3">
          <div>
            <h4>Contact Information</h4>
            <div className="row row-cols-1 row-cols-md-4 mt-4" style={{ color:'#4d4d4d' }}>
              <div className="mb-3">Address: 198 West 21th Street, Suite 721 New York NY 10016</div>
              <div className="mb-3">
                <a href="tel:0968599311" className="text-dark">Phone: +84 968 5999 311</a>
              </div>
              <div className="mb-3">Email: info@yoursite.com</div>
              <div className="mb-3">Website yoursite.com</div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <input placeholder="Your Name" className="w-100 border p-3 mb-3"/>
            <input placeholder="Your Email" className="w-100 border p-3 mb-3"/>
            <input placeholder="Subject" className="w-100 border p-3 mb-3"/>
            <textarea className="border w-100 border p-3 mb-3" placeholder="Message" style={{minHeight:'12rem'}}/>
            <Button variant="contained" className="px-4" style={{ backgroundColor:'#f85a59' }}>
              Send Message
            </Button>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15738088.779613053!2d96.87047235300268!3d15.628641097136308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1663658854690!5m2!1svi!2sus" 
              width="100%" 
              height="400" 
              style={{border:0}} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact