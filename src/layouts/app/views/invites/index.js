// @ts-nocheck
import React from 'react';
import { Typography, Slide } from '@material-ui/core';
import { InviteComponent } from './components/inviteComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { INVITES } from '../../../../data/queries';
import { LoadIcon, ContentHeader } from '../../../../components';

export function Invites() {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);

  const removeInvite = (id) => {
    const newArray = inviteArray.filter((item) => item.id !== id);
    setInviteArray(newArray);
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title="Invites" subTitle="" />
        <div className={classes.cardGrid}>
          {inviteArray.map((invite, index) => {
            return (
              <InviteComponent
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
            setInviteArray(data.getInvites);
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;

            if (data.getInvites.length === 0) {
              return (
                <div>
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
                    Keep your profile fresh and up-to-date for the best chance
                    of getting noticed.
                  </Typography>
                </div>
              );
            }
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
