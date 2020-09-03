import React from 'react';

import { Card, Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, Row, Column } from '../';
import { Mutation } from 'react-apollo';
import { ADD_FAVOURITE } from '../../data/mutations';
import clsx from 'clsx';
import Cookies from 'js-cookie';

export default function ProfileCardCreative({ history, user }) {
  const classes = useStyles();
  const [isFav, setIsFav] = React.useState(false);

  return (
    <Card
      className={clsx({
        [classes.creativeCard]: true,
        [classes.creativeCardNoShadow]: !user.profileBG,
        [classes.creativeCardNoShadow]: !user.profileBG,
      })}
    >
      <div
        style={{
          backgroundImage:
            user.profileBG !== '' ? `url(${user.profileBG})` : '#eee',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          boxShadow:
            user.profileBG !== '' ? '10px 10px 10px rgba(0,0,0,0.2)' : 'none',
          height: 100,
          width: '100%',
          position: 'relative',
        }}
        className={clsx({
          [classes.noBG]: !user.profileBG,
        })}
      ></div>
      <div
        className={clsx({
          [classes.creativeCardBackground]: true,
          [classes.noProfile]: !user.profileImg,
          [classes.profileNoBG]: !user.profileBG,
        })}
        style={{
          backgroundImage:
            user.profileImg !== '' ? `url(${user.profileImg})` : `#ddd`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          position: 'relative',
        }}
      ></div>

      <Column j="center" a="center">
        <IconButton
          title={user.name}
          onClickEvent={() => history.push(`/public-preview/${user._id}`)}
          color="text-dark"
          disabled={false}
          iconPos="right"
          icon=""
          styleOverride={{
            color: '#222',
            boxSizing: 'border-box',
            paddingRight: 0,
            paddingLeft: 0,
            textDecoration: 'underline',
            marginTop: 0,
            marginBottom: 0,
          }}
          type="button"
        />
        <div>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
          <Icon onClick={() => {}} className={classes.favIconStar}>
            {isFav ? 'star_border' : 'star_border'}
          </Icon>
        </div>
      </Column>
    </Card>
  );
}
