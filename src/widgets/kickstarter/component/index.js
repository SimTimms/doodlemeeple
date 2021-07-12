import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonShortcut,
  Column,
  Row,
  CardComponent,
} from '../../../components';
import clsx from 'clsx';

export default function KickstarterComponent({ kickstarter, setKickstarter }) {
  const classes = useStyles();

  return (
    <CardComponent styleOverride={{ maxWidth: 400 }}>
      <div
        style={{ width: '100%', cursor: 'pointer' }}
        onClick={() => {
          setKickstarter(kickstarter);
        }}
      >
        <Column>
          <Row j="space-between" a="center">
            <Row a="center" j="flex-start">
              <div
                style={{
                  backgroundImage: `url(${kickstarter.featuredImage})`,
                }}
                className={classes.profileThumb}
              ></div>
              <Column a="flex-start">
                <Typography style={{ fontSize: 12 }}>
                  {kickstarter.name}
                </Typography>
              </Column>
            </Row>
            <MenuButtonShortcut
              text={{
                name: 'Edit',
                color: 'light',
                icon: 'edit',
                count: 0,
                back: 'primary',
              }}
              onClickEvent={() => null}
              active={false}
              countIcon="star"
            />
          </Row>
        </Column>
      </div>
    </CardComponent>
  );
}
