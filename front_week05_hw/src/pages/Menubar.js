import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/bookshelf">Bookshelf</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Menubar;
