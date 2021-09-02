import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { BgImg } from './components';
import {
  Row,
  Column,
  MenuButtonStandard,
  DividerMini,
  DividerWithBorder,
} from '../../../components';
import OnlineStores from './onlineStore';
import GamePosts from './gamePosts';
import { MenuContext } from '../../../context';
import { Query } from 'react-apollo';
import { GAME_BY_ID } from '../data';
import MyPostsForm from '../../../widgets/myPosts/myPostForm';
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
                      <Row j="space-between" w="100%" pl={5} pr={5}>
                        <Typography className={classes.gameNameNoLink}>
                          {game.name}
                        </Typography>

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
                            {game.user.name}
                          </Typography>
                        </a>
                      </Row>

                      {game.summary && (
                        <Typography align="left" className={classes.summary}>
                          {game.summary}
                        </Typography>
                      )}
                      <Column w="100%">
                        <DividerWithBorder />
                        {game.url ? (
                          <a
                            href={`${game.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                          >
                            <MenuButtonStandard
                              title="Website"
                              onClickEvent={() => {}}
                            />
                          </a>
                        ) : (
                          <div></div>
                        )}
                      </Column>
                      <MyPostsForm
                        type="game"
                        objectId={game._id}
                        postId={'new'}
                      />
                      <GamePostWidget gameId={game._id} />
                    </Column>
                    <Column a="flex-start" j="flex-start" mw={300} w="50%">
                      {game.webshop.length > 0 && (
                        <OnlineStores webshops={game.webshop} />
                      )}
                      {game.gamePost.length > 0 && (
                        <GamePosts
                          gamePosts={game.gamePost}
                          profile={game.user}
                        />
                      )}

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
