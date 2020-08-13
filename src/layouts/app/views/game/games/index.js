import React from 'react';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { GAMES } from '../../../../../data/queries';
import {
  ContentHeader,
  MessageComponent,
  IconButton,
} from '../../../../../components';

export default function Games({ history }) {
  const classes = useStyles();
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Projects"
          subTitle="List the games or projects you need help with"
          subTitleExtra=""
          button={null}
        />
        <div className={classes.cardGrid}>
          <Query query={GAMES} fetchPolicy="network-only">
            {({ data }) => {
              return data
                ? data.gamesByUser.map((game, index) => (
                    <MessageComponent
                      key={`game_${index}`}
                      history={history}
                      backgroundImg={game.backgroundImg}
                      profiles={null}
                      subtitle={game.name}
                      miniProfile={false}
                      count=""
                      title=""
                      disabled={false}
                      onClickEvent={() => {
                        history.push(`/app/edit-game/${game._id}`);
                      }}
                    />
                  ))
                : null;
            }}
          </Query>

          <IconButton
            title="New Project"
            disabled={false}
            onClickEvent={() => history.push(`/app/edit-game/new`)}
            icon="add"
            color="primary"
            type="button"
            iconPos="right"
            styleOverride={null}
          />
        </div>
      </div>
    </Slide>
  );
}
