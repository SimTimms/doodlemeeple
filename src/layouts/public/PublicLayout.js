import React from 'react';
import LoginCard from './views/LoginCard';
import Registry from './views/register';
import { HomePage } from './views/HomePage';
import { Content } from '../../components';
import { StyledNavBar } from '../../components/navBar';
import { Footer } from '../../components/Footer';
import { PublicMenu, PublicFooterMenu } from '../menus';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import smithy from '../../assets/smithy.jpg';
import Typography from '@material-ui/core/Typography';

function PublicLayoutStyled(props) {
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
          {page === 'login' ? (
            <LoginCard />
          ) : page === 'register' ? (
            <Registry />
          ) : (
            <HomePage />
          )}
        </div>
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

export const PublicLayout = withStyles({
  root: {},
  background: {
    backgroundImage: `url(${smithy})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: 400,
    padding: 10,
  },
  bgOverlay: {
    background: '#fff',
    padding: '20px 10px 20px 10px',
    width: '80%',
    marginBottom: 10,
    marginLeft: '-10px',
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    boxShadow: ' 10px 5px 10px rgba(0,0,0,0.4)',
  },
  grid: { display: 'flex', justifyContent: 'space-between', height: '100%' },
  column: { display: 'flex', width: '50%', flexWrap: 'wrap' },
  columnProfile: {
    display: 'flex',
    width: '50%',
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  profileName: { marginRight: 10 },
})(PublicLayoutStyled);
