import React from "react";
import "./SideBar.css";
import { RiHome2Line } from "react-icons/ri";
import { HiCollection } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { BsBasket2Fill } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="SideBar">
      <h1 className="SideBar-title">به صفحه خود خوش امدید</h1>
      <ul className="link-Ul">
        <li className="list-item-Links ">
          <NavLink
            className={(e) => (e.isActive ? "List-itemNavLink List-item-link-active" : "List-itemNavLink")}
            to="/"
          >
            <RiHome2Line /> صفحه اصلی
          </NavLink>
        </li>
        <li className="list-item-Links">
          <NavLink
            className={(e) => (e.isActive ? "List-itemNavLink List-item-link-active" : "List-itemNavLink")}
            to="/Products"
          >
            <HiCollection /> محصولات
          </NavLink>
        </li>
        <li className="list-item-Links">
          <NavLink
            className={(e) => (e.isActive ? "List-itemNavLink List-item-link-active" : "List-itemNavLink")}
            to="/Comments"
          >
            {" "}
            <AiFillMail /> کامنت ها
          </NavLink>
        </li>
        <li className="list-item-Links">
          <NavLink
            className={(e) => (e.isActive ? "List-itemNavLink List-item-link-active" : "List-itemNavLink")}
            to="/Users"
          >
            {" "}
            <HiOutlineUsers /> کابران{" "}
          </NavLink>
        </li>
        <li className="list-item-Links">
          <NavLink
            className={(e) => (e.isActive ? "List-itemNavLink List-item-link-active" : "List-itemNavLink")}
            to="/Ordering"
          >
            <BsBasket2Fill /> سفارشات
          </NavLink>
        </li>
        <li className="list-item-Links">
          <NavLink
            className={(e) => (e.isActive ? "List-itemNavLink List-item-link-active" : "List-itemNavLink")}
            to="/Offers"
          >
            <MdOutlineLocalOffer /> تخفیف ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
