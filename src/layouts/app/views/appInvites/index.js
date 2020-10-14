import React from 'react';
//Data
import { Query } from 'react-apollo';
import { INVITES } from '../../../../data/queries';
//Components
import { Typography, Slide } from '@material-ui/core';
import {
  IconButton,
  Column,
  Divider,
  InviteComponent,
  Paper,
  FieldTitleDashboard,
} from '../../../../components';
import CreativeInvitesMenu from './creativeInvitesMenu';
//Other
import { useStyles } from './styles';

export default function AppInvites({ history }) {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);
  const [tabNbr, setTabNbr] = React.useState(1);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column w="100%">
          <CreativeInvitesMenu setTabNbr={setTabNbr} tabNbr={tabNbr} />
          <Divider />

          <Column w={600}>
            <FieldTitleDashboard
              name={tabNbr === 1 ? 'Invites' : 'Invite History'}
              inline={false}
            />
            {inviteArray.length > 0 && (
              <Paper p={10}>
                {inviteArray.map((invite, index) => {
                  return (
                    <InviteComponent
                      history={history}
                      key={`invite_${index}`}
                      invite={invite}
                    />
                  );
                })}
              </Paper>
            )}
          </Column>
        </Column>
        <Query
          query={INVITES}
          fetchPolicy="network-only"
          variables={{ status: tabNbr === 1 ? 'unopened' : 'declined' }}
          onCompleted={(data) => {
            setInviteArray(data.invitesByUser);
          }}
        >
          {({ data }) => {
            return data && data.invitesByUser.length === 0 ? (
              <Paper p={10}>
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
                    Keep your profile fresh and up-to-date for the best chance
                    of getting noticed.
                  </Typography>
                  <IconButton
                    title="Profile"
                    icon="face"
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
              </Paper>
            ) : null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
