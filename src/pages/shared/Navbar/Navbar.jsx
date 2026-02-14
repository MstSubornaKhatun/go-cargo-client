import React from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {

  const navLinks = (
    <>
      <li>
        <NavLink to="/services"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }>
          Services
        </NavLink>
      </li>

      <li>
        <NavLink to="/coverage"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }>
          Coverage
        </NavLink>
      </li>

      <li>
        <NavLink to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }>
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink to="/pricing"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }>
          Pricing
        </NavLink>
      </li>

      <li>
        <NavLink to="/rider"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "hover:text-primary"
          }>
          Be a Rider
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-6">

      {/* Left - Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn-ghost lg:hidden ">
            <IoMenu className="mr-2 cursor-pointer" size={25} />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10">
            {navLinks}
          </ul>
        </div>

        <NavLink to="/" className="text-2xl font-bold text-primary">
          GoCargo
        </NavLink>
      </div>

      {/* Center - Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Right - Auth */}
      <div className="navbar-end gap-3">
        <NavLink to="/signin" className="btn btn-ghost text-primary">
          Sign In
        </NavLink>

        <NavLink to="/signup" className="btn btn-primary text-white">
          Sign Up
        </NavLink>
      </div>

    </div>
  );
};

export default Navbar;
