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
  MenuButtonShortcut,
  Row,
} from '../../../../components';
//Other
import { useStyles } from './styles';

export default function AppInvites({ history, theme }) {
  const classes = useStyles();
  const [inviteArray, setInviteArray] = React.useState([]);
  const [tab, setTab] = React.useState(1);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Row>
          <MenuButtonShortcut
            text={{
              name: 'Invites',
              color: '#222',
              icon: 'thumb_up',
              count: 0,
            }}
            onClickEvent={() => {
              setTab(1);
            }}
            active={false}
          />
        </Row>
        <Divider />
        <div className={classes.cardGrid}>
          {inviteArray.map((invite, index) => {
            return (
              <InviteComponent
                history={history}
                key={`invite_${index}`}
                invite={invite}
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
