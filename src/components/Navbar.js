import React from "react";
import Search from "../components/Search";
import "../styles/Navbar";

function Navbar() {
  // used as the navbar for the site.
  return (
    <div className="navbar">
      <div className="logo bold">Employee Directory</div>
      <div className="descriptor">
        <div className="bold">Employee Search: </div>
        <Search />
      </div>
    </div>
  );
}
export default Navbar;
