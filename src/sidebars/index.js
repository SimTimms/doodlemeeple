import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <nav style={{ width: '100%', background: '#444', padding: 3 }}>
      <Link to="/devlogin">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
      <Link to="/devlogout">
        <Button variant="contained" color="primary">
          Logout
        </Button>
      </Link>
      <Link to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
    </nav>
  );
}
