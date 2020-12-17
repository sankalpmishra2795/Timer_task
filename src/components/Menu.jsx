import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container text-center" style={{ minWidth: '100vw' }}>
        <Link to="/timer" className="btn btn-success my-5">
          Timer
        </Link>
       
      </div>
    
  );
};
export default Menu;
