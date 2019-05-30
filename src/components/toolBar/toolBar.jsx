import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ToolBar = ({ onInputChange }) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text">Person</span>
    </div>
    <input type="text" className="form-control" placeholder="Name" onChange={onInputChange} />
    <Link to="/add-new" className="btn btn-primary ml-4">Add new</Link>
  </div>
);

ToolBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default ToolBar;
