import React from 'react';
//import Registry from './views/register';
import { Content } from '../../components';
import { StyledNavBar, Footer, PublicFooterMenu } from '../../components';
//import { PasswordForgot } from './views/passwordForgot';
//import { PasswordReset } from './views/passwordReset';
import Deleted from './views/deleted';
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
      <StyledNavBar
        open={false}
        history={props.history}
        theme={props.theme}
        center={true}
        sidebarMissing={true}
      >
        <img
          src={process.env.REACT_APP_DEVICE}
          style={{ maxHeight: 40 }}
          alt={`${process.env.REACT_APP_COMPANY_PUBLIC_NAME} Logo`}
        />
      </StyledNavBar>
      <Content>
        {/*: page === 'register' ? (
          <Registry campaignId={token} history={props.history} />
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
          <LoginPage history={props.history} forwardTo={props.location} />
        )*/}
      </Content>

      <Footer>
        <PublicFooterMenu />
      </Footer>
    </div>
  );
}
