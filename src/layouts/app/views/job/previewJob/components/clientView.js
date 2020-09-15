import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  IconButton,
  ColumnWrapper,
  HeaderTwo,
  Column,
  Row,
} from '../../../../../../components';

export default function ClientView({
  job,
  history,
  setConversationUser,
  setChatOpen,
  chatOpen,
  contracts,
}) {
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.rootRow}>
        <ColumnWrapper>
          <Column j="center" a="center">
            <HeaderTwo str="Invites" />
            {job.invites.map(
              (invite, index) =>
                invite.reciever && (
                  <div style={{ width: '100%' }} key={`invite-${index}`}>
                    <Row j="flex-start" a="center">
                      <Row j="flex-start" a="center">
                        <div
                          style={{
                            backgroundImage: `url(${invite.receiver.profileImg})`,
                          }}
                          className={classes.profileThumb}
                          key={`profile_${index}`}
                        >
                          {contracts.indexOf(invite.receiver._id) > -1 && (
                            <Typography
                              variant="body1"
                              component="p"
                              className={classes.countsStyle}
                            >
                              1
                            </Typography>
                          )}
                        </div>
                        <Typography>
                          {invite.receiver.name}{' '}
                          {invite.status ? `(${invite.status})` : ''}
                        </Typography>
                      </Row>
                      {contracts.indexOf(invite.receiver._id) > -1 && (
                        <IconButton
                          disabled={invite.status === 'declined'}
                          color="primary"
                          icon="request_quote"
                          title="Quote"
                          onClickEvent={() => {
                            history.push(`/app/view-contract/${'contractid'}`);
                          }}
                          styleOverride={{
                            color: invite.status === 'declined' && '#fff',
                          }}
                          type="button"
                          iconPos="left"
                        />
                      )}

                      <IconButton
                        disabled={invite.status === 'declined'}
                        color={
                          invite.status === 'declined'
                            ? 'text-white'
                            : 'primary'
                        }
                        icon="chat"
                        title="Chat"
                        onClickEvent={() => {
                          setConversationUser(invite.receiver);
                          setChatOpen(chatOpen ? false : true);
                        }}
                        styleOverride={{
                          color: invite.status === 'declined' && '#fff',
                        }}
                        type="button"
                        iconPos="left"
                      />
                    </Row>
                  </div>
                )
            )}
          </Column>
        </ColumnWrapper>
      </div>
    </Slide>
  );
}
