import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="container-fluid" style={{marginTop: '10px'}}>
      <div className="row">
        <div className="col-sm-6">
          Herolo Weather Task
        </div>
        <div className="col-sm-6 d-flex justify-content-end">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-primary">
              <NavLink to="/" className="styled">
                Home
              </NavLink>
            </button>
            <button type="button" className="btn btn-primary">
              <NavLink to="/favorites" className="styled">
                Favorites
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;