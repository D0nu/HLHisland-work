import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="propButton" onClick={toggleDropdown}>Properties</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/lagos">Lagos</Link>
          </li>
          <li>
            <Link to="/houston">Houston</Link>
          </li>
          <li>
            <Link to="/abu-dhabi">Abu Dhabi</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;


