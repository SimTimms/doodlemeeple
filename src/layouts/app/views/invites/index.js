// @ts-nocheck
import React from 'react';
import Slide from '@material-ui/core/Slide';
import { InviteComponent } from './components/inviteComponent';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { INVITES } from '../../../../data/queries';
import { LoadIcon, ContentHeader } from '../../../../components';

export function Invites() {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title="Invites" subTitle="" />
        <div className={classes.cardGrid}>
          {inviteArray.map((invite, index) => {
            return <InviteComponent key={`invite_${index}`} invite={invite} />;
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
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
