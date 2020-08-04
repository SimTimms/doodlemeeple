import React from 'react';
import { Card } from '@material-ui/core';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import { HeaderTwo, TextArray, TextDivider } from '../';

export default function FeatureCardInvite({
  thumbnail,
  job,
  author,
  authorId,
  summary,
  buttonOne,
  buttonTwo,
  history,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
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
          <HeaderTwo str={job} />
          <TextArray
            str={
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  className={classes.link}
                  onClick={() => {
                    history.push(`/public-preview/${authorId}`);
                  }}
                >{`${author}`}</Typography>
              </div>
            }
          />

          <TextDivider />
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
            {buttonTwo && (
              <div
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                {buttonOne}
              </div>
            )}
            {!buttonTwo && { buttonOne }}
            {buttonTwo && (
              <div style={{ height: 20, borderLeft: '1px solid #ddd' }}></div>
            )}
            {buttonTwo && (
              <div
                style={{
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                {buttonTwo}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
