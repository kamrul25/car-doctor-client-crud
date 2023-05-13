import img1 from "../../../assets/images/team/1.jpg"
import img2 from "../../../assets/images/team/2.jpg"
import img3 from "../../../assets/images/team/3.jpg"

const Team = () => {
  return (
    <div className="mt-5 mb-16">
      <div className="text-center space-y-2 mb-5">
        <h3 className="text-2xl font-medium text-orange-500">Team</h3>
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-base text-base-content">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} className="w-full rounded-xl" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Car Engine Plug </h2>
            <p className="text-base-content">Engine Expert</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} className="w-full rounded-xl" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Car Engine Plug </h2>
            <p className="text-base-content">Engine Expert</p>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} className="w-full rounded-xl" />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Car Engine Plug </h2>
            <p className="text-base-content">Engine Expert</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
