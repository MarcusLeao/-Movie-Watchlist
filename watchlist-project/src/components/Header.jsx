import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

export const Header = () => {
  return (
    <header className="bg-sky-950 ">
      <div className="container">
        <div className="flex justify-between items-center py-2.5">
        <Navbar.Brand
        onClick={() => navigate("/")}
        className="cursor-pointer"
      >
        <img
          src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-home-feist-electronicsfeist-electronics-22.png"
          className="mr-3 h-6 sm:h-9"
          alt="MyWatchlist"
          />
        <span className="text-white text-xl no-underline transition-all duration-0 ease-linear hover:opacity-70">
        MyWatchlist
        </span>
      </Navbar.Brand>

          <ul className="p-0 m-0 list-none flex items-center">
            <li className="inline-block mr-7 last:mr-0">
              <Link className="text-white text-xl no-underline transition-all duration-0 ease-linear hover:opacity-70" to="/">Watch List</Link>
            </li>

            <li className="inline-block mr-7 last:mr-0">
              <Link className="text-white text-xl no-underline transition-all duration-0 ease-linear hover:opacity-70" to="/watched">Watched</Link>
            </li>

            <li className="inline-block mr-7 last:mr-0">
              <Link to="/add" className="px-3.5 py-2.5 bg-lime-500 text-sky-950 rounded-md uppercase font-bold inline-block border-none text-base transition-all duration-0 ease-linear leading-tight hover:opacity-100 hover:bg-lime-700 hover: cursor-pointer disabled:opacity-50 disabled:pointer-events-none">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
