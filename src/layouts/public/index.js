import React from 'react';
import LoginCard from './views/LoginCard';
import Registry from './views/register';
import { Content } from '../../components';
import { StyledNavBar, Footer } from '../../components';
import { PublicMenu, PublicFooterMenu } from '../menus';
import { PasswordForgot } from './views/passwordForgot';
import { PasswordReset } from './views/passwordReset';
import { useStyles } from './styles';

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
      <StyledNavBar title="" open={false}>
        <PublicMenu history={props.history} />
      </StyledNavBar>
      <Content>
        {page === 'login' ? (
          <div className={classes.backgroundLogin}>
            <LoginCard history={props.history} forwardTo={null} />
          </div>
        ) : page === 'register' ? (
          <div className={classes.backgroundSignup}>
            <Registry />
          </div>
        ) : page === 'password-forgot' ? (
          <div className={classes.backgroundSignup}>
            <PasswordForgot history={props.history} />
          </div>
        ) : page === 'password-reset' ? (
          <div className={classes.backgroundSignup}>
            <PasswordReset history={props.history} token={token} />
          </div>
        ) : (
          <div className={classes.backgroundLogin}>
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
