import React from 'react';
import { StyledNavBar } from '../../../imports/sharedComponents';
import { styles } from './styles';

export default function NavBar({ history }) {
  const classes = styles();

  return (
    <StyledNavBar
      open={false}
      history={history}
      center={true}
      sidebarMissing={true}
    >
      <img
        src={process.env.REACT_APP_DEVICE}
        style={{ maxHeight: 40 }}
        alt={`${process.env.REACT_APP_COMPANY_PUBLIC_NAME} Logo`}
      />
    </StyledNavBar>
  );
}
