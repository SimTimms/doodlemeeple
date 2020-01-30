import React from 'react';
import { AboutPage } from './views/AboutPage';
import { Content, StyledNavBar } from '../../components';
import { PublicMenu } from '../menus';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function AboutLayoutStyled(props) {
  const [page, setPage] = React.useState('home');
  const { classes } = props;
  const pageJump = props.match ? props.match.params.page : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

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
