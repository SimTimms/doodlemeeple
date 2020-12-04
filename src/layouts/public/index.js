import React from 'react';
import LoginCard from './views/LoginCard';
import Registry from './views/register';
import { Content } from '../../components';
import { StyledNavBar, Footer } from '../../components';
import { PublicFooterMenu } from '../menus';
import { PasswordForgot } from './views/passwordForgot';
import { PasswordReset } from './views/passwordReset';
import Deleted from './views/deleted';
import { useStyles } from './styles';
import logo from '../../assets/logo.svg';

export function PublicLayout(props) {
  const [page, setPage] = React.useState('home');
  const classes = useStyles();

  const pageJump = props.match ? props.match.params.page : null;
  const token = props
    ? props.match
      ? props.match.params.token
        ? props.match.params.token
        : null
      : null
    : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

  return (
    <div>
      <StyledNavBar
        open={false}
        history={props.history}
        theme={props.theme}
        center={true}
        sidebarMissing={true}
      >
        <img src={logo} style={{ height: 40 }} alt="DoodleMeeple Logo" />
      </StyledNavBar>
      <Content>
        {page === 'login' ? (
          <div className={classes.backgroundWrapper}>
            <div className={classes.backgroundLogin}> </div>
            <div className={classes.cover}></div>
            <LoginCard history={props.history} forwardTo={null} />
          </div>
        ) : page === 'register' ? (
          <div className={classes.backgroundSignup}>
            <Registry campaignId={token} />
          </div>
        ) : page === 'password-forgot' ? (
          <div className={classes.backgroundSignup}>
            <PasswordForgot history={props.history} />
          </div>
        ) : page === 'password-reset' ? (
          <div className={classes.backgroundSignup}>
            <PasswordReset history={props.history} token={token} />
          </div>
        ) : page === 'deleted' ? (
          <div className={classes.backgroundSignup}>
            <Deleted />
          </div>
        ) : (
          <div className={classes.backgroundWrapper}>
            <div className={classes.backgroundLogin}> </div>
            <div className={classes.cover}></div>
            <LoginCard history={props.history} forwardTo={props.location} />
          </div>
        )}
      </Content>

      <Footer>
        <PublicFooterMenu />
      </Footer>
    </div>
  );
}
