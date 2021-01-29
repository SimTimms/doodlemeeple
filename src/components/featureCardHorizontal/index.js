import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Row, Column, Paper } from '../';

export default function FeatureCardHorizontal({
  background,
  title,
  subtitle,
  meta,
  buttonOne,
  buttonTwo,
}) {
  const classes = useStyles();
  console.log(meta);
  return (
    <Paper p="0">
      <div className={classes.postHeader}>
        <Column>
          <div
            className={classes.profileWrapperFeatured}
            style={{ backgroundImage: `url(${background})` }}
          >
            <Typography
              style={{
                color: '#fff',
                fontWeight: 900,
                paddingBottom: 5,
                paddingLeft: 10,
                boxSizing: 'border-box',
                fontSize: 16,
              }}
              variant="h5"
            >
              {title}
            </Typography>
          </div>

          <div className={classes.content}>
            <Row j="flex-start">
              <div
                style={{
                  maxWidth: 120,
                  minWidth: 120,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.meta}
                >
                  <b>by {meta.split(' - ')[0]}</b>
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.meta}
                >
                  {meta.split(' - ')[1]}
                </Typography>
              </div>
              <Typography
                variant="body1"
                style={{
                  borderLeft: '1px solid rgba(255,255,255,0.3)',
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                {subtitle}
              </Typography>
              <div
                style={{
                  maxWidth: 80,
                  minWidth: 80,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {buttonOne}
                {buttonTwo && (
                  <div
                    style={{ height: 20, borderLeft: '1px solid #222' }}
                  ></div>
                )}
                {buttonTwo && buttonTwo}
              </div>
            </Row>
          </div>
        </Column>
      </div>
    </Paper>
  );
}
