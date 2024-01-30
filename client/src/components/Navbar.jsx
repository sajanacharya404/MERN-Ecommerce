import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "../slices/userSlice";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await axios.post("/api/logout");
    dispatch(setData(null));
  };

  return (
    <div className='flex justify-between bg-slate-950 h-[7vh] text-white items-center'>
      <div className=''>
        <Link to='/'>
          <h1>Ecommerce</h1>
        </Link>
      </div>
      <div className='flex gap-5  '>
        {currentUser ? (
          <>
            <div className='flex  '>
              {currentUser && (
                <Link
                  to={"/admindashboard"}
                  className='flex items-center text-black'
                >
                  <span className='ml-2'>Dashboard</span>
                </Link>
              )}
            </div>
            <div className='flex  ' onClick={handleLogout}>
              <Link
                to='/login'
                className='flex items-center hover:bg-slate-800 p-1 rounded-md ease-in-out duration-200 group'
              >
                <span className='group-hover:rotate-90'>
                  <AiOutlineLogin />
                </span>
                <span className='px-1'>Logout</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className='flex  '>
              <Link
                to='/login'
                className='flex items-center hover:bg-slate-800 p-1 rounded-md ease-in-out duration-200 group'
              >
                <span className='group-hover:rotate-90'>
                  <AiOutlineLogin />
                </span>
                <span className='px-1'>Login</span>
              </Link>
            </div>

            <div className='flex '>
              <Link
                to='/register'
                className='flex items-center hover:bg-slate-800 p-1 rounded-md ease-in-out duration-200'
              >
                <PiUserCirclePlusFill size={20} />
                <span className='px-1'>Register</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
