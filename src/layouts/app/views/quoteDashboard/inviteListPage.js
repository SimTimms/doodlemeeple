import React from 'react';
import { Query } from 'react-apollo';
import { INVITES } from '../../../../data/queries';
import { Column, InviteComponent } from '../../../../components';
import { useStyles } from './styles';
import NoInvite from './noInvite';

export default function InviteListPage({ history, menu }) {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);

  return (
    <div className={classes.root}>
      <Column w="100%">
        <Column w={600}>
          {inviteArray.length > 0 &&
            inviteArray.map((invite, index) => {
              return !invite.sender ? null : (
                <Column>
                  <InviteComponent
                    invite={invite}
                    onClickEvent={() =>
                      menu.updateMenuContext({
                        ...menu,
                        workPage: {
                          ...menu.workPage,
                          secondaryPage: 'view_invite',
                          inviteId: invite._id,
                          jobId: invite.job._id,
                        },
                      })
                    }
                  />
                </Column>
              );
            })}
        </Column>
      </Column>
      <Query
        query={INVITES}
        fetchPolicy="network-only"
        variables={{
          status: ['unopened', 'read'],
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
  );
}
