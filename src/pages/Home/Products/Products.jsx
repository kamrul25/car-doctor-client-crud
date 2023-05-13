import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <div className="mt-5 mb-5">
      <div className="text-center space-y-2 mb-5">
        <h3 className="text-2xl font-medium text-orange-500">
          Popular Products
        </h3>
        <h1 className="text-4xl font-bold">Browse Our Products</h1>
        <p className="text-base text-base-content">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img1} className="w-32 h-32" />
          </figure>
          <div className="card-body text-center items-center">
            <div className="text-warning flex text-2xl">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img2} className="w-32 h-32" />
          </figure>
          <div className="card-body text-center items-center">
            <div className="text-warning flex text-2xl">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img3} className="w-32 h-32" />
          </figure>
          <div className="card-body text-center items-center">
            <div className="text-warning flex text-2xl">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img4} className="w-32 h-32" />
          </figure>
          <div className="card-body text-center items-center">
            <div className="text-warning flex text-2xl">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <h2 className="card-title">Car Battery</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img5} className="w-32 h-32" />
          </figure>
          <div className="card-body text-center items-center">
            <div className="text-warning flex text-2xl">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <h2 className="card-title">Car Wheel</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img6} className="w-32 h-32" />
          </figure>
          <div className="card-body text-center items-center">
            <div className="text-warning flex text-2xl">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-orange-500 font-bold">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
