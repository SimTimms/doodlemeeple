import React from 'react';
import { Card, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

export default function FeatureCardInvite({
  background,
  thumbnail,
  job,
  game,
  author,
  summary,
  buttonOne,
  buttonTwo,
}) {
  const classes = useStyles();
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
          <img
            className={classes.profileWrapperFeatured}
            src={thumbnail}
            alt=""
          />

          <Typography variant="h5" className={classes.postHeaderText}>
            <b>{job}</b>
          </Typography>
          <div
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            <Typography
              variant="h6"
              className={classes.link}
            >{`${game}`}</Typography>
            <Typography
              variant="h6"
              style={{ marginLeft: 5, marginRight: 5 }}
            >{` by `}</Typography>
            <Typography
              variant="h6"
              className={classes.link}
            >{`${author}`}</Typography>
            <Typography variant="h6">{`${summary}`}</Typography>
          </div>
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
