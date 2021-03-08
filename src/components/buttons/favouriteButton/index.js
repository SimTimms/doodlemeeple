import React, { useEffect } from 'react';
import { Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Mutation } from 'react-apollo';
import { ADD_FAVOURITE } from '../../../data/mutations';

export default function FavouriteButton({ favourite, creative }) {
  const classes = useStyles();

  const [isFav, setIsFav] = React.useState(false);
  const [favCount, setFavCount] = React.useState(0);

  useEffect(() => {
    setIsFav(favourite);
    setFavCount(creative.likedMe.length);
  }, [favourite, creative]);

  return (
    <Mutation
      mutation={ADD_FAVOURITE}
      variables={{
        id: creative._id,
      }}
    >
      {(mutation) => {
        return (
          <div
            className={`${classes.smallActionWrapper} ${classes.top}`}
            onClick={() => {
              setIsFav(isFav ? false : true);
              setFavCount(isFav ? favCount - 1 : favCount + 1);
              mutation();
            }}
            title={
              favCount === 1
                ? `1 person has liked this creative`
                : `${favCount} people have liked this creative`
            }
            style={{ marginRight: 3 }}
          >
            <Icon
              className={clsx({
                [classes.favIcon]: true,
                [classes.favIconDark]: !isFav,
              })}
            >
              favorite
            </Icon>
            <Typography
              className={clsx({
                [classes.actionText]: true,
                [classes.actionTextDark]: !isFav,
              })}
            >
              {favCount}
            </Typography>
          </div>
        );
      }}
    </Mutation>
  );
}
