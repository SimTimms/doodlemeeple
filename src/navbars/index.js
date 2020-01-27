import React from 'react';
import NavBarButton from './components';

export function DevNavBar() {
  return (
    <nav
      style={{ width: '100%', background: '#444', padding: 3, color: '#fff' }}
    >
      <b>Developer Menu:</b>
      <NavBarButton linkTo="/register" name="Register" />
      <NavBarButton linkTo="/devlogin" name="Login" />
      <NavBarButton linkTo="/devlogout" name="Logout" />
      <NavBarButton linkTo="/" name="Home" />
    </nav>
  );
}
