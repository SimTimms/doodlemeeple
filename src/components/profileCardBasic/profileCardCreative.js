import React, { useEffect } from 'react';
import { Card, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, Column } from '../';
import clsx from 'clsx';

export default function ProfileCardCreative({ history, creative, favourite }) {
  const classes = useStyles();
  const [isFav, setIsFav] = React.useState(false);

  useEffect(() => {
    setIsFav(favourite);
  }, [favourite, creative]);

  return (
    <Card
      className={clsx({
        [classes.creativeCard]: true,
        [classes.creativeCardNoShadow]: !creative.profileBG,
        [classes.creativeCardNoShadow]: !creative.profileBG,
      })}
    >
      <div
        style={{
          backgroundImage:
            creative.profileBG !== '' ? `url(${creative.profileBG})` : '#eee',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          boxShadow:
            creative.profileBG !== ''
              ? '10px 10px 10px rgba(0,0,0,0.2)'
              : 'none',
          height: 100,
          width: '100%',
          position: 'relative',
        }}
        className={clsx({
          [classes.noBG]: !creative.profileBG,
        })}
      ></div>
      <div
        className={clsx({
          [classes.creativeCardBackground]: true,
          [classes.noProfile]: !creative.profileImg,
          [classes.profileNoBG]: !creative.profileBG,
        })}
        style={{
          backgroundImage:
            creative.profileImg !== '' ? `url(${creative.profileImg})` : `#ddd`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          position: 'relative',
        }}
      ></div>
      {/* <Mutation
        mutation={ADD_FAVOURITE}
        variables={{
          id: creative._id,
        }}
      >
        {(mutation) => {
          return (
            <div className={`${classes.smallActionWrapper} ${classes.top}`}>
              <Icon
                onClick={() => {
                  setIsFav(isFav ? false : true);
                  setFavCount(isFav ? favCount - 1 : favCount + 1);
                  mutation();
                }}
                className={classes.favIcon}
              >
                {isFav ? 'favorite' : 'favorite_border'}
              </Icon>
              <Typography className={classes.actionText} style={{}}>
                {favCount}
              </Typography>
            </div>
          );
        }}
      </Mutation>
      */}

      <Column j="center" a="center">
        <IconButton
          title={creative.name}
          onClickEvent={() => history.push(`/user-profile/${creative._id}`)}
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
