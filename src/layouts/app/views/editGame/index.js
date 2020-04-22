import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Card, Slide, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import { LoadIcon, ErrorBox, ContentHeader } from '../../../../components';
import { Query } from 'react-apollo';
import { GAME } from '../../../../data/queries';
import { UpdateGameButton } from './components/updateGameButton';
import { toaster } from '../../../../utils/toaster';

export function EditGame({ theme, projectId }) {
  const classes = useStyles();
  const [game, setGame] = React.useState({
    name: '',
    img: '',
    backgroundImg: '',
    summary: '',
    location: '',
    gallery: {
      images: [],
    },
    showreel: '',
    type: 'game',
  });
  const [disabledValue, setDisabledValue] = React.useState(false);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <div className={classes.root}>
          <ContentHeader
            title={projectId === 'new' ? 'Create Project' : 'Edit Project'}
            subTitle="Create a new game or project listing, then create jobs"
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingBottom: 5,
            }}
          >
            <UpdateGameButton
              game={game}
              disabledValue={disabledValue}
              setDisabledValue={setDisabledValue}
              toast={() => {
                toaster('Saved');
              }}
            />

            <Link
              to={`/preview-game/${projectId}`}
              style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ width: 60, marginLeft: 10 }}
              >
                <Icon style={{ fontSize: 18, color: '#fff' }}>pageview</Icon>
              </Button>
            </Link>
          </div>
          <Card className={classes.card}>
            <ProfileHeader
              game={game}
              setGame={setGame}
              autosaveFunction={null}
              setDisabledValue={setDisabledValue}
            />
          </Card>
        </div>

        <Query
          query={GAME}
          variables={{ gameId: 'new' }}
          fetchPolicy="network-only"
          onCompleted={(data) => {}}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
