import React from 'react';
import { Card, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

export default function FeatureCard({
  background,
  thumbnail,
  title,
  subtitle,
  buttonOne,
  buttonTwo,
}) {
  const classes = useStyles();
  console.log(thumbnail);
  return (
    <Card className={classes.card}>
      <div
        className={classes.postImage}
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className={classes.postHeader}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {thumbnail === 'news' ? (
            <div className={classes.iconWrapperFeatured}>
              <Icon style={{ fontSize: 60, color: '#fff' }}>article</Icon>
            </div>
          ) : (
            <img
              className={classes.profileWrapperFeatured}
              src={thumbnail}
              alt=""
            />
          )}
          <Typography
            variant="h5"
            component="h4"
            className={classes.postHeaderText}
          >
            <b>{title}</b>
          </Typography>
          <Typography variant="h6" style={{ textAlign: 'center' }}>
            {subtitle}
          </Typography>

          <div
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: 300,
              justifyContent: 'space-between',
              marginTop: 10,
              zIndex: 1,
              alignItems: 'center',
            }}
          >
            {buttonOne}
            {buttonTwo && (
              <div style={{ height: 20, borderLeft: '1px solid #222' }}></div>
            )}
            {buttonTwo && buttonTwo}
          </div>
        </div>
      </div>
    </Card>
  );
}
