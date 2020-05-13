import React from 'react';
import { Card, Slide, Typography, Icon } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useStyles } from './styles';
import { ContentHeader, LoadIcon } from '../../../../../components';
import { Query } from 'react-apollo';
import { GAME } from '../../../../../data/queries';

export default function PreviewGame({ theme, gameId, autosaveIsOn, history }) {
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
    id: 'new',
  });
  const [loading, setLoading] = React.useState(true);

  return loading === true ? (
    <Query
      query={GAME}
      variables={{ gameId: gameId }}
      fetchPolicy="network-only"
      onCompleted={(data) => {
        data.getGame && setGame({ ...data.getGame });
        setLoading(false);
      }}
    >
      {({ data }) => {
        return <LoadIcon />;
      }}
    </Query>
  ) : (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <div style={{ width: '100%' }}>
          <Card className={classes.card}>
            <Typography
              variant="body1"
              style={{
                textAlign: 'right',
                background: theme.palette.primary.main,
                color: '#fff',
                padding: 3,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'space-between',
                }}
              >
                <Icon
                  style={{
                    marginRight: 5,
                  }}
                >
                  casino
                </Icon>
                {game.type}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'space-between',
                }}
              >
                <Icon
                  style={{
                    marginRight: 5,
                  }}
                >
                  location_on
                </Icon>
                {game.location}
              </div>
            </Typography>
            <div style={{ padding: 10 }}>
              <Typography variant="h1" style={{ textAlign: 'center' }}>
                {game.name}
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                {game.summary}
              </Typography>
              <div
                style={{
                  background: `url(${game.backgroundImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  width: '100%',
                  height: 400,
                }}
              ></div>
              {game.showreel !== '' && (
                <div>
                  <Typography
                    variant="h3"
                    style={{ textAlign: 'center', marginBottom: 20 }}
                  >
                    Promotional Video
                  </Typography>
                  <ReactPlayer
                    url={game.showreel}
                    playing
                    controls={true}
                    muted={true}
                    style={{
                      width: '100%',
                      padding: 10,
                      boxSizing: 'border-box',
                      background: '#ddd',
                    }}
                    width="100%"
                  />
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
