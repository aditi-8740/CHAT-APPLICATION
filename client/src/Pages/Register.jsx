import React, { useState } from "react";
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function handleregisterUser(event) {
    event.preventDefault();
    const {data} = await axios.post('/register',{
        username,
        email,
        password,
    });
    
  }

  return (
    <>
      <div className="text-center flex flex-col justify-center">
        <h2 className="text-rounded-lg ">Register</h2>
        <form className="max-w-lg mx-auto" onSubmit={handleregisterUser}>
          <div  className="flex justify-between items-center">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="username"
              className="border px-3 py-0.5 m-2 rounded-md"
              value={username}
              id="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="border px-3 py-0.5 m-2 rounded-md"
              value={email}
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              className="border px-3 py-0.5 m-2 rounded-md"
              value={password}
              id="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="bg-blue-500 border px-3 py-1 text-white w-full rounded-md">
            Register
          </button>
          <div>
            Already have an account?{" "}
            {/* <NavLink to="/login" className="text-sky-600 underline">
            Login Now
          </NavLink> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
