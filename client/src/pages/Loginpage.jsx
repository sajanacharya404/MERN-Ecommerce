import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setData, setToken } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Loginpage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth", user);
      const data = await res.data;

      dispatch(setToken(data.token));
      dispatch(setData(data));

      console.log("res:", res);
      console.log("Data", data);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='h-[93vh] flex items-center  justify-center flex-col gap-2 bg-slate-300 '>
      <form
        className=' flex flex-col gap-5 items-center'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label htmlFor='email' className=' text-xl'>
            Email
          </label>
          <input
            id='email'
            type='text'
            placeholder='enter your email..'
            className='border-2 border-slate-900 outline-none p-2 rounded-md'
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className=' text-xl'>
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='enter your password..'
            className='border-2 border-slate-900 outline-none p-2 rounded-md'
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button className='bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800'>
          Login
        </button>
      </form>
      <p className=''>
        Don't have an account?
        <span className='text-blue-900 underline p-2 '>
          <Link to='/register'>Register</Link>
        </span>
      </p>
    </div>
  );
};

export default Loginpage;
