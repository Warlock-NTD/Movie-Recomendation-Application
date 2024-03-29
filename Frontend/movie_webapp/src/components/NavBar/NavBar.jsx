import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  function handleClickLogout() {
    //window.alert("click")

    localStorage.setItem("access", "");
    localStorage.setItem("username", "");
    localStorage.setItem("user_id", "");

    navigate("/login");
  }

  return (
    <div className="bg-primary grid md:grid-cols-10">
      <div className="md:col-span-9 ">
        <div className=" uppercase text-5xl justify-center item-center text-center">
          Movie Film
        </div>
        <div className="grid md:grid-cols-3 justify-center items-center text-center text-xl">
          <Link to="/home">
            <div className="md:col-span-1 cursor-pointer py-1">Home</div>
          </Link>
          <div className="md:col-span-1 cursor-pointer py-1">Latest</div>
          <div className="md:col-span-1 cursor-pointer py-1">Genre</div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        {localStorage.getItem("access") == "" ? (
          <>
            <Link to="/login">
              <button className="btn mr-2">Login</button>
            </Link>
            <Link to="/login">
              <button className="btn mr-2">Register</button>
            </Link>
          </>
        ) : (
          <div>
            <div className="flex mr-2 ">{localStorage.getItem("username")}</div>
            <button className="btn mr-2 " onClick={handleClickLogout}>
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
