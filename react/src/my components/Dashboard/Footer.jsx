import { Link } from "react-router-dom";
import './footer.css'

const Footer = () => {
    return ( 
        <div className="footer bg-light py-3">
            <div className="footer-section">
            <div className="section1">
               <h3>Estore.</h3>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Mollitia reprehenderit quasi quo?</p>
            </div>
            <div className="section2">
                <h3>Quick Links</h3>
                <Link to="/">Home</Link>
                <Link to="/">Products</Link>
                <Link to="/">Add Cart</Link>
                <Link to="/">Contact Us</Link>
            </div>
            <div className="section3">
                <h3>New Products</h3>
                <Link to="/">Woman Cloth</Link>
                <Link to="/">Fashion Accessories</Link>
                <Link to="/">Men Cloth</Link>
                <Link to="/">Men Accessories</Link>
            </div>
            <div className="section4">
                <h3>Support</h3>
                <Link to="/">Frequently Asked Questions</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Report a Payment Issue</Link>
            </div>
            </div>
            <p className="copy-right fw-semibold text-center mt-3 fs-6">Copyright ©2024 All rights reserved</p>
        </div>
     );
}
 
export default Footer;