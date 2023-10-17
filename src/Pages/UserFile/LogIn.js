import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from "firebase/auth";


const LogIn = () => {
  const { login, googleSignIn } = useContext(authContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider()

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (login) {
          alert("Your Login Complete Successfully");
          form.reset();
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const handelGoogleSignIn = () =>{
    googleSignIn(googleProvider)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(err => console.error(err))
}

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success bg-lime-500">Login</button>
              </div>
            </form>
            <p className="text-center mb-2">
              LaptopBd {" "}
              <Link className="text-orange-600 font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
            <button
              onClick={handelGoogleSignIn}
              className="btn btn-active ml-6 mr-6 mb-6"
            >
              <span className="text-rose-700"><FaGoogle></FaGoogle></span> Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
