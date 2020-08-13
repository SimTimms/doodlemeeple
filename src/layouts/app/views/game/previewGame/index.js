import React from 'react';
import { Slide } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { useStyles } from './styles';
import {
  LoadIcon,
  Header,
  SubHeader,
  HeaderTwo,
  Text,
  ColumnWrapper,
} from '../../../../../components';
import { Query } from 'react-apollo';
import { GAME } from '../../../../../data/queries';
import clsx from 'clsx';

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
        data.gameById && setGame({ ...data.gameById });
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
            className={clsx({
              [classes.wrapperTwo]: true,
              [classes.wrapperTwoMissing]: !game.backgroundImg,
            })}
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
              <Header str={game.name ? game.name : 'Untitled Project'} />
              <SubHeader
                str={game.type && game.type !== '' ? game.type : '-'}
              />
            </div>
            <ColumnWrapper>
              <HeaderTwo str="Description" />
              <Text str={game.summary} />
            </ColumnWrapper>
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
