import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
 
const {createUser} = useContext(authContext)
const navigate = useNavigate()

 const handelSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password)

    createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                alert('Your SignUp Complete Successfully')
                saveUser(name, email); 
                form.reset()
            }
        })
        .catch(err => console.error(err))
}
// Function for send data Database 75.3
const saveUser = (name,email) =>{
  const user = {name, email};
  fetch('http://localhost:4000/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
    }) 
    .then(res => res.json())
  .then(data => {
    console.log(data)
    navigate('/login')
  })      
        }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSignUp} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success bg-lime-500">Sign UP</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
