import React from 'react';
import { Icon, Typography } from '@material-ui/core';
import { Column } from '../../components';
import { useStyles } from './styles';
import clsx from 'clsx';

const titleHelper = {
  lastOn: 'This user has been active recently',
  job: 'A new job has been posted',
  jobPrivate: 'This user has posted an invite only job',
  newUser: 'A new user! Welcome',
  game: 'A game has been listed',
  kickstarter: 'A kickstarter has been listed',
  public: 'A post has been created',
};

const iconHelper = {
  lastOn: 'ads_click',
  job: 'post_add',
  jobPrivate: 'lock',
  newUser: 'person',
  game: 'casino',
  kickstarter: 'view_in_ar',
  public: 'chat',
};

const headerHelper = {
  lastOn: 'Activity',
  job: 'Job',
  jobPrivate: 'This user has posted an invite only job',
  newUser: 'New',
  game: 'Game',
  kickstarter: 'Kickstarter',
  public: 'Post',
};

export default function IconButton({ type, setFilter, filter }) {
  const classes = useStyles();
  return (
    <Column
      mw={80}
      p="3px 0 3px 0"
      br={6}
      classAdd={classes.clickable}
      onClickEvent={() => {
        const newObj = { ...filter };
        newObj[type] = newObj[type] ? false : true;
        setFilter({ ...newObj });
      }}
    >
      <Icon
        style={{ fontSize: '1rem' }}
        title={titleHelper['lastOn']}
        className={clsx({
          [classes.publicIcon]: true,
          [classes.lastOn]: filter.lastOn && type === 'lastOn',
          [classes.job]: filter.job && type === 'job',
          [classes.newUser]: filter.newUser && type === 'newUser',
          [classes.game]: filter.game && type === 'game',
          [classes.kickstarter]: filter.kickstarter && type === 'kickstarter',
          [classes.public]: filter.public && type === 'public',
        })}
      >
        {iconHelper[type]}
      </Icon>
      <Typography style={{ paddingTop: 3 }}>{headerHelper[type]}</Typography>
    </Column>
  );
}
