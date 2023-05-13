import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import Group from "../../assets/Group.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-content text-base-300">
        <div>
           <Link to="/">
           <img src={logo} alt="" />
           </Link>
          <p >Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
          <img src={Group} alt="" />
        </div> 
        <div>
          <span className="footer-title">About </span> 
          <Link to="/" className="link link-hover">Home</Link> 
          <Link to="/services" className="link link-hover">Services</Link> 
          <Link to=" " className="link link-hover">Contact</Link> 

        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <Link to="" className="link link-hover">Why Car Doctor</Link> 
          <Link to="/about" className="link link-hover">About us</Link> 
        </div> 
        <div>
          <span className="footer-title">Support</span> 
          <Link className="link link-hover">Support Center</Link> 
          <Link className="link link-hover">Feedback</Link> 
          <Link className="link link-hover">Accesbility</Link> 
        </div>
      </footer>
    );
};

export default Footer;