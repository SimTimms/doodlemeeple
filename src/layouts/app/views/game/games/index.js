import React from 'react';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { GAMES } from '../../../../../data/queries';
import { ContentHeader, MessageComponent } from '../../../../../components';

export default function Games({ history }) {
  const classes = useStyles();
  const [gameArray, setGameArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Games"
          subTitle="List the games and jobs you need help with"
          subTitleExtra=""
          button={null}
        />
        <div className={classes.cardGrid}>
          {gameArray.map((game, index) => {
            console.log(game);
            return (
              <MessageComponent
                key={`game_${index}`}
                history={history}
                backgroundImg={game.backgroundImg}
                profiles={null}
                subtitle={game.name}
                miniProfile={false}
                count={game.jobs.length}
                title={''}
                disabled={false}
                onClickEvent={() => {
                  history.push(`/app/edit-game/${game.id}`);
                }}
              />
            );
          })}
          <MessageComponent
            key={`game_new`}
            history={history}
            backgroundImg={null}
            profiles={null}
            subtitle="New Game"
            miniProfile={false}
            count={null}
            title="Create a new game"
            onClickEvent={() => {
              history.push(`/app/edit-game/new`);
            }}
            disabled={false}
          />
        </div>
        <Query
          query={GAMES}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setGameArray(data.getGames);
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
