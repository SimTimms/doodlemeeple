import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { BgImg } from './components';
import {
  Row,
  Column,
  DividerMini,
  DividerWithBorder,
  Divider,
  MainTitle,
  HrefLink,
} from '../../../components';
import OnlineStores from './onlineStore';
import GamePosts from './gamePosts';
import { MenuContext } from '../../../context';
import { Query } from 'react-apollo';
import { GAME_BY_ID } from '../data';
import GamePostWidget from '../../../widgets/myPosts/gamePostWidget';

export default function GameProfileFull() {
  const classes = useStyles();

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Query
          query={GAME_BY_ID}
          variables={{ _id: menu.homePage.gameId }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            if (!data) return null;
            if (data) {
              const game = data.gameById;
              return (
                <Column j="space-between">
                  <BgImg previewImage={game.featuredImage} onClick={() => {}} />
                  <Row a="flex-start" j="space-between">
                    <Column j="flex-start" w="100%" mw={700}>
                      <Row j="space-between" w="100%">
                        <MainTitle title={game.name} />
                        <a
                          href={`/public-preview/${game.user._id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            textDecoration: 'none',
                            color: '#222',
                          }}
                        >
                          <Typography className={classes.authorName}>
                            {`posted by ${game.user.name}`}
                          </Typography>
                        </a>
                      </Row>

                      {game.summary && (
                        <Typography align="left" className={classes.summary}>
                          {game.summary}
                        </Typography>
                      )}
                      <Column w="100%" a="flex-start">
                        <DividerWithBorder />
                        <MainTitle title="Website" />
                        <Divider />
                        {game.url ? (
                          <HrefLink url={game.url} title={game.url} />
                        ) : (
                          <div></div>
                        )}
                      </Column>
                      {game.gamePost.length > 0 && (
                        <Column w="100%" a="flex-start">
                          <DividerWithBorder />
                          <MainTitle title="Updates" />
                          <Divider />
                          <GamePosts
                            gamePosts={game.gamePost}
                            profile={game.user}
                          />
                        </Column>
                      )}
                    </Column>
                    <Column a="flex-start" j="flex-start" mw={300} w="50%">
                      {game.webshop.length > 0 && (
                        <Column w="100%" a="flex-start">
                          <DividerWithBorder />
                          <MainTitle title="Where to Buy" />
                          <Divider />
                          <OnlineStores webshops={game.webshop} />
                        </Column>
                      )}

                      <Column w="100%" a="flex-start">
                        <DividerWithBorder />
                        <MainTitle title="Comments" />
                        <GamePostWidget gameId={game._id} withForm={true} />
                      </Column>

                      <DividerMini />
                    </Column>
                  </Row>
                </Column>
              );
            }
          }}
        </Query>
      )}
    </MenuContext.Consumer>
  );
}
