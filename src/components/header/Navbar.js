import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Navbar = () => {
  return (
    <Button style={{ height: '20px' }}>
      <Link to="/">Home</Link>
    </Button>
  );
};

export default Navbar;