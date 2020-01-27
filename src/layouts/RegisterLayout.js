import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import RegisterCard from '../views/registerCard';
import { Content, StyledNavBar } from '../components';

function RegisterLayout() {
  const classes = useStyles();
  return (
    <div>
      <StyledNavBar className={null} title="Register"></StyledNavBar>
      <Content>
        <RegisterCard />
      </Content>
    </div>
  );
}

export default RegisterLayout;
