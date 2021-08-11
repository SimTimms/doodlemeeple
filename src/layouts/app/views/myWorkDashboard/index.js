import React from 'react';
import { Query } from 'react-apollo';
import { INVITES } from '../../../../data/queries';
import { Slide } from '@material-ui/core';
import {
  Column,
  InviteComponent,
  DividerWithBorder,
  Paper,
  UserDeleted,
} from '../../../../components';
import { useStyles } from './styles';
import NoWork from './noWork';

export default function MyWorkDashboard({ history, setTabNbr }) {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);

  return (
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
          status: ['quote_sent', 'accepted', 'complete'],
        }}
        onCompleted={(data) => {
          setInviteArray(data.invitesByUser);
        }}
      >
        {({ data }) => {
          return data && data.invitesByUser.length === 0 ? (
            <NoWork history={history} />
          ) : null;
        }}
      </Query>
    </div>
  );
}
