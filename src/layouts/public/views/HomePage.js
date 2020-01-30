import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import smithy from '../../../assets/smithy.jpg';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

function HomePageStyled(props) {
  const { classes } = props;
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <div className={clsx(classes.grid)}>
        <div className={clsx(classes.column)}>
          <Typography variant="h4" color="textPrimary" gutterBottom>
            <span
              style={{
                color: '#fff',
                textShadow: '5px 5px 5px rgba(0,0,0,0.5)',
              }}
            >
              Connecting board game creatives
            </span>
          </Typography>
          <div className={clsx(classes.bgOverlay)}>
            <Typography variant="h4" color="textPrimary">
              Creator
            </Typography>
            <Typography variant="h6" color="textSecondary">
              I design, publish or produce board games
            </Typography>
          </div>
          <div className={clsx(classes.bgOverlay)}>
            <Typography variant="h4" color="textPrimary">
              Creative
            </Typography>
            <Typography variant="h6" color="textSecondary">
              I draw, paint, sketch, model or copy write
            </Typography>
          </div>
        </div>
        <div className={clsx(classes.columnProfile)}>
          <div className={clsx(classes.profileName)}>
            <Typography variant="h6" color="textPrimary">
              <span
                style={{
                  color: '#fff',
                  textShadow: '5px 5px 5px rgba(0,0,0,0.5)',
                }}
              >
                Featured Artist
              </span>
            </Typography>
            <Typography variant="h4" color="textPrimary">
              <span
                style={{
                  color: '#fff',
                  textShadow: '5px 5px 5px rgba(0,0,0,0.5)',
                }}
              >
                Jamie Noble
              </span>
            </Typography>
          </div>
          <div
            style={{
              borderRadius: '50%',
              border: '20px solid #fff',
              background: 'rgba(0,0,0,0.7)',
              width: 240,
              height: 240,
              marginBottom: '-100px',
            }}
          ></div>
        </div>
      </div>
    </Slide>
  );
}

export const HomePage = withStyles({
  root: {},
  background: {
    backgroundImage: `url(${smithy})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: 400,
    padding: 10,
  },
  bgOverlay: {
    background: '#fff',
    padding: '20px 10px 20px 10px',
    width: '80%',
    marginBottom: 10,
    marginLeft: '-10px',
    height: 44,
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    boxShadow: ' 10px 5px 10px rgba(0,0,0,0.4)',
  },
  grid: { display: 'flex', justifyContent: 'space-between', height: '100%' },
  column: { display: 'flex', width: '50%', flexWrap: 'wrap' },
  columnProfile: {
    display: 'flex',
    width: '50%',
    height: '100%',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  profileName: { marginRight: 10 },
})(HomePageStyled);
