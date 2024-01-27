import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Registerpage = () => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  console.log(userData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =await axios.post("/api/users", userData);
      if(res.status===200){
        navigate("/login")
      }
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div className="h-[93vh] items-center flex flex-col justify-center  gap-2 bg-slate-300 ">
      <form
        className=" flex flex-col gap-5 items-center h-96 p-10 "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className=" text-xl">
            Username
          </label>
          <input
            id="name"
            type="text"
            placeholder="enter your username.."
            className="border-2 border-slate-900 outline-none p-2 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className=" text-xl">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="enter your email.."
            className="border-2 border-slate-900 outline-none p-2 rounded-md"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className=" text-xl">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="enter your password.."
            className="border-2 border-slate-900 outline-none p-2 rounded-md"
            onChange={handleChange}
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
