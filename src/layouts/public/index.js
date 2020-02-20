import React from 'react';
import LoginCard from './views/LoginCard';
import Registry from './views/register';
import { HomePage } from './views/HomePage';
import { Content } from '../../components';
import { StyledNavBar } from '../../components/navBar';
import { Footer } from '../../components/Footer';
import { PublicMenu, PublicFooterMenu } from '../menus';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

export function PublicLayout(props) {
  const [page, setPage] = React.useState('home');
  const classes = useStyles();
  const pageJump = props.match ? props.match.params.page : null;

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
            <LoginCard history={props.history} />
          </div>
        ) : page === 'register' ? (
          <div className={classes.backgroundSignup}>
            <Registry />
          </div>
        ) : (
          <div className={classes.background}>
            <HomePage />
          </div>
        )}
      </Content>
      <div style={{ marginTop: 40 }}>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          About
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </Typography>
      </div>
      <div style={{ marginTop: 40 }}>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          How
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur
        </Typography>
      </div>
      <Footer>
        <PublicFooterMenu />
      </Footer>
    </div>
  );
}
