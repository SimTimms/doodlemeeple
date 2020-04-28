import React from 'react';
import Slide from '@material-ui/core/Slide';
import { GameComponent, EmptyGameComponent } from './components/gameComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { GAMES } from '../../../../data/queries';
import { LoadIcon, ContentHeader } from '../../../../components';

export function Games() {
  const classes = useStyles();
  const [gameArray, setGameArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Games"
          subTitle="List the games and jobs you need help with"
        />
        <div className={classes.cardGrid}>
          {gameArray.map((game, index) => {
            return <GameComponent key={`project_${index}`} game={game} />;
          })}
          <EmptyGameComponent key={`project_empty`} />
        </div>
        <Query
          query={GAMES}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setGameArray(data.getGames);
          }}
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
