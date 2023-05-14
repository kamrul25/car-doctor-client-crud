import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import  { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form= event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .then(error => console.log(error))
      }
      return (
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-6">
            <div className="w-1/2 mx-auto rounded-xl">
              <img src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-5xl font-bold">SignUp Now!</h1>
                <form onSubmit={handleSignUp}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Confirm Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="SignUp"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
                <p className="mt-4">Already have an account <Link className="text-orange-500" to="/login">Login</Link></p>
              </div>
            </div>
          </div>
        </div>
      );

}

export default SignUp;