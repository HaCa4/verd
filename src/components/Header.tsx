import React from "react";
import { BsBellFill, BsFillGridFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IInitialState } from "../utils/types";
const Header: React.FC = () => {
  const postList = useSelector((state: IInitialState) => state.reducer.postList);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-20 md:h-16 px-4  rounded-lg bg-white">
      <div className="flex font-bold text-lg">
        <Link to="/">Arbit Blog</Link>
      </div>
      <div className="flex justify-around items-center w-4/5 md:w-1/5">
        <div className="relative font-bold text-gray-500">
          Posts
          <span className="w-5 h-5 bg-green-200 text-green-700 absolute -top-3 -right-3 rounded-full text-xs flex items-center justify-center ">
            {postList?.length}
          </span>
        </div>
        <div>
          <BsBellFill className="fill-gray-500" />
        </div>
        <div>
          <BsFillGridFill className="fill-gray-500" />
        </div>
        <div>
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
