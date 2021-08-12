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
import { HistoryContext } from '../../../../context';

export default function MyWorkDashboard() {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);

  return (
    <HistoryContext.Consumer>
      {(history) => (
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
                        <InviteComponent invite={invite} />
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
      )}
    </HistoryContext.Consumer>
  );
}
