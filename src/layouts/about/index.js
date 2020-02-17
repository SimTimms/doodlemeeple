import React from 'react';
import { AboutPage } from './views/AboutPage';
import { Content } from '../../components';
import { StyledNavBar } from '../../components/navBar';
import { PublicMenu } from '../menus';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function AboutLayoutStyled(props) {
  const { classes } = props;

  return (
    <div>
      <StyledNavBar title="" open={false}>
        <PublicMenu />
      </StyledNavBar>
      <Content>
        <div className={clsx(classes.background)}>
          <AboutPage />
        </div>
      </Content>
    </div>
  );
}

export const AboutLayout = withStyles({
  root: {},
  background: {
    width: '100%',
    height: 400,
    padding: 10,
  },
})(AboutLayoutStyled);
