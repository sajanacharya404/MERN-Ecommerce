import React from "react";
import { Link } from "react-router-dom";

const Registerpage = () => {
  return (
    <div className="   h-[93vh] items-center flex flex-col justify-center  gap-2 bg-slate-300 ">
      <form className=" flex flex-col gap-5 items-center h-96 p-10 ">
        <div className="flex flex-col">
          <label className=" text-xl">Username</label>
          <input
            type="text"
            placeholder="enter your username.."
            className="border-2 border-slate-900 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-xl">Email</label>
          <input
            type="text"
            placeholder="enter your email.."
            className="border-2 border-slate-900 outline-none p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className=" text-xl">Password</label>
          <input
            type="text"
            placeholder="enter your password.."
            className="border-2 border-slate-900 outline-none p-2 rounded-md"
          />
        </div>
        <button className="bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800">
          Register
        </button>
      </form>
      <p className="">
        Already have an account?
        <span className="text-blue-900 underline p-2 ">
          <Link to="/login">Login</Link>
        </span>
      </p>
    </div>
  );
};

export default Registerpage;
