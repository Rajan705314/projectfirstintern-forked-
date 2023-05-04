import React from 'react';
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <form className="search-form">
        <input type="text" placeholder="Search..." />
        <button type="submit">Go</button>
      </form>
    </nav>
  );
}

export default Navbar();
