import React from 'react';
import { Typography, Slide } from '@material-ui/core';
import {
  CardComponent,
  Column,
  Divider,
  IconButton,
} from '../../../../../imports/sharedComponents';
import { styles } from './styles';
import { themeStyles } from '../../../../../imports/sharedStyles';

export default function ThanksCard({ history }) {
  const classes = { ...styles(), ...themeStyles() };
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.cardWrapper}>
        <CardComponent>
          <Column>
            <Typography variant="h5">Thank You</Typography>
            <Typography>
              You should receive a password reset link soon
            </Typography>
          </Column>
          <Divider />
          <Column>
            <IconButton
              title="Back to Login"
              icon="chevron_left"
              disabled={false}
              color="primary"
              onClickEvent={() => {
                history.push('/login');
              }}
              styleOverride={null}
              type="button"
              iconPos="right"
            />
          </Column>
        </CardComponent>
      </div>
    </Slide>
  );
}
