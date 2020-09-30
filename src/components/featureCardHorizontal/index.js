import React from 'react';
import { Card } from '@material-ui/core';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';

export default function FeatureCardHorizontal({
  background,
  title,
  subtitle,
  meta,
  buttonOne,
  buttonTwo,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.postHeader}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            className={classes.profileWrapperFeatured}
            style={{ backgroundImage: `url(${background})` }}
          ></div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'space-between',
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                className={classes.postHeaderText}
              >
                <b>{title}</b>
              </Typography>
            </div>
            <Typography variant="body1">{subtitle}</Typography>
            <Typography variant="body1" component="p" className={classes.meta}>
              <b>{meta}</b>
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
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
