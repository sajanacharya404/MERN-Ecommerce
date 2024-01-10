import React from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <div className="h-[93vh] flex items-center  justify-center flex-col gap-2 bg-slate-300 ">
      <form className=" flex flex-col gap-5 items-center   ">
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
          Login
        </button>
      </form>
      <p className="">
        Don't have an account?
        <span className="text-blue-900 underline p-2 ">
          <Link to="/register">Register</Link>
        </span>
      </p>
    </div>
  );
};

export default Loginpage;
