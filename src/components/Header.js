import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Shopping List</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/lists">My Lists</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;
