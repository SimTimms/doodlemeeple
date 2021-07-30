import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  Row,
  CardComponent,
} from '../../../components';

export default function GameComponent({ game, setGame }) {
  const classes = useStyles();
  const pending = game.name !== '' && game.summary && game.featuredImage;

  return (
    <CardComponent styleOverride={{ maxWidth: 400 }}>
      <div style={{ width: '100%', cursor: 'pointer' }}>
        <Column>
          <Row j="space-between" a="center">
            <Row a="center" j="flex-start">
              <div
                style={{
                  backgroundImage: `url(${game.featuredImage})`,
                }}
                className={classes.profileThumb}
              ></div>
              <Column a="flex-start">
                <Typography>{game.name}</Typography>
                <Typography className={classes.dull}>
                  {pending ? 'Live' : 'Draft'}
                </Typography>
              </Column>
            </Row>
            <MenuButtonStandard
              title="Edit"
              onClickEvent={() => setGame(game)}
              disabled={false}
            />
          </Row>
        </Column>
      </div>
    </CardComponent>
  );
}
