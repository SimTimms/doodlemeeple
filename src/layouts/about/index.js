import React from 'react';
import { AboutPage } from './views/AboutPage';
import { Content } from '../../components';
import { StyledNavBar } from '../../components/navBar';
import { PublicMenu } from '../menus';
import { withStyles } from '@material-ui/core/styles';

function AboutLayoutStyled(props) {
  const { classes } = props;

  return (
    <div>
      <StyledNavBar title="" open={false}>
        <PublicMenu history={props.history} />
      </StyledNavBar>
      <Content>
        <div className={classes.background}>
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
