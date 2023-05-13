import img1 from "../../../assets/images/contact/open.png"
import img2 from "../../../assets/images/contact/contact.png"
import img3  from "../../../assets/images/contact/address.png"


const Contact = () => {
    return (
        <div className="hero mt-4 mb-4 bg-base-content text-white flex justify-evenly py-10 items-center rounded-xl">
            <div className="flex justify-between items-center gap-3">
             <img src={img1} alt="" />
                <div>
                    <p className="font-medium">We are open monday-friday</p>
                    <p className="font-bold text-xl">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex justify-between items-center gap-3">
           <img src={img2} alt="" />
                <div>
                    <p className="font-medium">Have a question?</p>
                    <p className="font-bold text-xl">+2546 251 2658</p>
                </div>
            </div>
            <div className="flex justify-between items-center gap-3">
            <img src={img3} alt="" />
                <div>
                    <p className="font-medium">Need a repair? our address</p>
                    <p className="font-bold text-xl">Liza Street, New York</p>
                </div>
            </div>
      </div>
    );
};

export default Contact;