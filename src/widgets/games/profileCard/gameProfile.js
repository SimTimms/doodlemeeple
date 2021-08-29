import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { BgImg } from './components';
import { Row, Column, MenuButtonStandard, Divider } from '../../../components';

export default function GameProfile({ game }) {
  const classes = useStyles();
  return (
    <div
      className={clsx({
        [classes.creativeCard]: true,
      })}
    >
      <Column j="space-between" h="100%">
        <Column j="flex-start">
          <BgImg previewImage={game.featuredImage} onClick={() => {}} />
          <Row j="flex-start">
            <a
              href={`${game.url}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#222', width: '100%' }}
            >
              <Typography
                style={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                  textAlign: 'center',
                  fontSize: 16,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {game.name}
              </Typography>
            </a>
          </Row>
        </Column>

        {game.summary && (
          <Typography align="center" className={classes.summary}>
            {game.summary}
          </Typography>
        )}
        {game.price && (
          <Typography align="center" className={classes.summary}>
            {game.price}
          </Typography>
        )}
        <Column w="100%">
          <Row w="100%" j="space-around">
            {game.webshop.map((webshop) => (
              <a
                href={`${webshop.url}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <MenuButtonStandard
                  title={`${webshop.name} ${webshop.price ? 'from' : ''} ${
                    webshop.price ? webshop.price : ''
                  }`}
                  icon="shopping_cart"
                  onClickEvent={() => {}}
                />
              </a>
            ))}
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
          </Row>
          <Divider />
        </Column>
      </Column>
    </div>
  );
}
