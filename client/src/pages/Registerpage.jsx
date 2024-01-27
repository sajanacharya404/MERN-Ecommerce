import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Registerpage = () => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState()

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if(!data.success){
        setError(data.message);
      }
      setError(data.message);
    } catch (error) {setError(error.message)}
  };

  return (
    <div className='h-[93vh] items-center flex flex-col justify-center  gap-2 bg-slate-300 '>
      <form
        className=' flex flex-col gap-5 items-center h-96 p-10 '
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col'>
          <label htmlFor='username' className=' text-xl'>
            Username
          </label>
          <input
            id='username'
            type='text'
            placeholder='enter your username..'
            className='border-2 border-slate-900 outline-none p-2 rounded-md'
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email' className=' text-xl'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='enter your email..'
            className='border-2 border-slate-900 outline-none p-2 rounded-md'
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='password' className=' text-xl'>
            Password
          </label>
          <input
            id='password'
            placeholder='enter your password..'
            className='border-2 border-slate-900 outline-none p-2 rounded-md'
            onChange={handleChange}
          />
        </div>
        <button className='bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800'>
          Register
        </button>
      </form>
      <p className=''>
        Already have an account?
        <span className='text-blue-900 underline p-2 '>
          <Link to='/login'>Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Registerpage;
