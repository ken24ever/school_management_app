import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <Link to="/schoolRegistrationForm">
            <button className="btn btn-primary btn-block">
              School Registration
            </button>
          </Link>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary btn-block">
            Guardian Registration
          </button>
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
