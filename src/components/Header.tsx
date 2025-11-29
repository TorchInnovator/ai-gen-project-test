import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">首頁</Link></li>
          <li><Link to="/about">關於我們</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
