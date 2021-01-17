import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CATEGORY_IMAGES } from '../../../data/queries';

export function CategoryBox({ title, type }) {
  const classes = useStyles();

  return (
    <Query query={CATEGORY_IMAGES} variables={{ type: [type] }}>
      {({ data, loading }) => {
        data && console.log(data);
        return loading ? null : (
          <div
            className={`${classes.catBox} ${classes.sizeLarge}`}
            style={{
              backgroundImage: data
                ? data.imageCategory
                  ? `url(${data.imageCategory[0].img})`
                  : ''
                : '',
            }}
          >
            <Typography
              variant="h6"
              className={classes.catBoxTitleMain}
              align="center"
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              className={classes.catBoxArtist}
              align="right"
            >
              {data
                ? data.categoryImages
                  ? `Art by ${data.categoryImages.name}`
                  : ''
                : ''}
            </Typography>
          </div>
        );
      }}
    </Query>
  );
}

export function CategoryBoxMini({ type, title }) {
  const classes = useStyles();

  return (
    <Query query={CATEGORY_IMAGES} variables={{ type: [type] }}>
      {({ data, loading }) => {
        return loading ? null : (
          <div
            style={{
              backgroundImage: data
                ? data.imageCategory
                  ? `url(${data.imageCategory[0].img})`
                  : ''
                : '',
            }}
            className={`${classes.catBox} ${classes.sizeSmall}`}
          >
            <Typography variant="h6" className={classes.catBoxTitleSecondary}>
              {title}
            </Typography>
          </div>
        );
      }}
    </Query>
  );
}
