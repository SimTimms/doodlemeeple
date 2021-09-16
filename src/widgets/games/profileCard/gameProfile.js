import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import {
  Row,
  Column,
  MenuButtonStandard,
  DividerMini,
  DividerWithBorder,
  HrefLink,
} from '../../../components';
import OnlineStores from './onlineStore';
import { MenuContext } from '../../../context';

export default function GameProfile({ game }) {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <MenuContext.Consumer>
        {(menu) => (
          <Column j="space-between" h="100%">
            <Column j="flex-start">
              <BgImg previewImage={game.featuredImage} onClick={() => {}} />
              <Row j="space-between" w="100%" pl={5} pr={5}>
                <Typography
                  className={classes.gameName}
                  onClick={() =>
                    menu.updateMenuContext({
                      ...menu,
                      homePage: {
                        ...menu.homePage,
                        secondaryPage: 'game_profile',
                        gameId: game._id,
                      },
                    })
                  }
                >
                  {game.name}
                </Typography>

                <HrefLink
                  title={game.user.name}
                  url={`/user-profile/${game.user._id}`}
                ></HrefLink>
              </Row>
            </Column>

            {game.summary && (
              <Typography align="center" className={classes.summary}>
                {game.summary}
              </Typography>
            )}

            {game.webshop.length > 0 && (
              <OnlineStores webshops={game.webshop} />
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
                  <MenuButtonStandard title="Website" onClickEvent={() => {}} />
                </a>
              ) : (
                <div></div>
              )}

              <DividerMini />
            </Column>
          </Column>
        )}
      </MenuContext.Consumer>
    </div>
  );
}
