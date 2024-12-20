import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">События</Link></li>
        <li><Link to="/events/new">Добавить событие</Link></li>
        <li><Link to="/categories">Категории</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
