import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="card w-auto bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex  justify-between items-center">
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <Link to={`checkOut/:${_id}`} className=" text-orange-500"><FaArrowRight /> </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
