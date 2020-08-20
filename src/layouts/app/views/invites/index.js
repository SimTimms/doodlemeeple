import React from 'react';
import { Typography, Slide, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { INVITES } from '../../../../data/queries';
import {
  FieldTitleDashboard,
  IconButton,
  Column,
  Divider,
  InviteComponent,
} from '../../../../components';

export function Invites({ history, theme }) {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);

  const removeInvite = (id) => {
    const newArray = inviteArray.filter((item) => item._id !== id);
    setInviteArray(newArray);
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Divider />
        <FieldTitleDashboard name="Invites" inline={false} a="l" />
        <Divider />
        <div className={classes.cardGrid}>
          {inviteArray.map((invite, index) => {
            return (
              <InviteComponent
                history={history}
                key={`invite_${index}`}
                invite={invite}
                removeInvite={removeInvite}
              />
            );
          })}
        </div>
        <Query
          query={INVITES}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setInviteArray(data.invitesByUser);
          }}
        >
          {({ data }) => {
            return data && data.invitesByUser.length === 0 ? (
              <Column a="center" j="center">
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.notice}
                >
                  No invites?
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.notice}
                >
                  Keep your profile fresh and up-to-date for the best chance of
                  getting noticed.
                </Typography>
                <IconButton
                  title="Profile"
                  icon="contact_mail"
                  color="primary"
                  styleOverride={null}
                  iconPos="right"
                  disabled={false}
                  type="button"
                  onClickEvent={() => {
                    history.push('/app/edit-profile');
                  }}
                />
              </Column>
            ) : null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
