import React from 'react';
import { Card, Slide, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useStyles } from './styles';
import { LoadIcon, IconTitle, InlineHeader } from '../../../../../components';
import { Query } from 'react-apollo';
import { GAME } from '../../../../../data/queries';
import moment from 'moment';

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
    user: { name: '' },
    createdAt: '',
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
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            className={classes.wrapperTwo}
            style={{
              backgroundImage: `url(${game.backgroundImg})`,
            }}
          ></div>
          <div
            className={classes.inset}
            style={{
              backgroundImage: `url(${game.backgroundImg})`,
            }}
          ></div>
          <div className={classes.wrapperFive}>
            <div className={classes.wrapperThree}>
              <Typography
                variant="h1"
                style={{ textAlign: 'center', fontSize: 40 }}
                className={classes.title}
              >
                {game.name}
              </Typography>
              <Typography
                variant="body1"
                style={{ textAlign: 'center' }}
                className={classes.subTitle}
              >
                {game.type && game.type !== '' ? game.type : '-'}
              </Typography>
            </div>

            <div
              className={classes.columnWrapper}
              style={{ borderTop: '1px dotted #ccc', marginTop: 40 }}
            >
              <div className={classes.column}>
                <Typography variant="h3" className={classes.descriptionTitle}>
                  Description
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  {game.summary}
                </Typography>
              </div>
            </div>
          </div>
          {game.showreel !== '' && (
            <div className={classes.wrapperFive}>
              <div className={classes.columnWrapper}>
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
                    marginTop: 40,
                  }}
                  width="100%"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
}
