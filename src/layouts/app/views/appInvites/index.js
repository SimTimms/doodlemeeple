import React from 'react';
import { Query } from 'react-apollo';
import { INVITES } from '../../../../data/queries';
import { Slide } from '@material-ui/core';
import {
  Column,
  Divider,
  InviteComponent,
  DividerWithBorder,
  Paper,
  UserDeleted,
} from '../../../../components';
import { useStyles } from './styles';
import NoInvite from './noInvite';

export default function AppInvites({ history, setTabNbr }) {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column w="100%">
          <Column w={600}>
            {inviteArray.length > 0 && (
              <Paper p={10}>
                {inviteArray.map((invite, index) => {
                  return !invite.sender ? (
                    <UserDeleted />
                  ) : (
                    <Column>
                      {index > 0 && <DividerWithBorder />}
                      <InviteComponent
                        history={history}
                        key={`invite_${index}`}
                        invite={invite}
                        setTabNbr={setTabNbr}
                      />
                    </Column>
                  );
                })}
              </Paper>
            )}
          </Column>
        </Column>
        <Query
          query={INVITES}
          fetchPolicy="network-only"
          variables={{
            status: [
              'unopened',
              'read',
              'quote_sent',
              'draft',
              'accepted',
              'declined',
              'rejected',
              'closed',
              'complete',
            ],
          }}
          onCompleted={(data) => {
            setInviteArray(data.invitesByUser);
          }}
        >
          {({ data }) => {
            return data && data.invitesByUser.length === 0 ? (
              <NoInvite history={history} />
            ) : null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
