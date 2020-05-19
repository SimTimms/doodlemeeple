import React from 'react';
import { Card, Slide, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useStyles } from './styles';
import { LoadIcon, IconTitle, InlineHeader } from '../../../../../components';
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
            <InlineHeader>
              <IconTitle
                icon="casino"
                title={game.type && game.type !== '' ? game.type : '-'}
              />
              <IconTitle
                icon="location_on"
                title={
                  game.location && game.location !== '' ? game.location : '-'
                }
              />
            </InlineHeader>
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
            </div>
          </Card>
          {game.showreel !== '' && (
            <Card className={classes.card}>
              <InlineHeader
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
                <IconTitle
                  icon="ondemand_video"
                  title="Shameless Self Promotion"
                />
              </InlineHeader>
              <div style={{ padding: 10 }}>
                <div>
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
              </div>
            </Card>
          )}
        </div>
      </div>
    </Slide>
  );
}
