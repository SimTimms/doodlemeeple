import React from 'react';
import { useStyles } from '../styles';
import { Slide, Typography } from '@material-ui/core';
import {
  IconButton,
  ColumnWrapper,
  HeaderTwo,
  Column,
  Divider,
  Row,
} from '../../../../../../components';
export default function ChosenCreative({
  job,
  setProposalOpen,
  contracts,
  setConversationUser,
  history,
  setChatOpen,
  chatOpen,
}) {
  const classes = useStyles();

  return (
    <ColumnWrapper>
      <Column j="center" a="center">
        <HeaderTwo str="Your Creative" />
        <Divider />
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
                  {job.submitted === 'paid' && (
                    <IconButton
                      disabled={false}
                      color="primary"
                      icon="request_quote"
                      title="Contract"
                      onClickEvent={() => {
                        history.push(
                          `/app/view-contract/${job.contracts[0]._id}`
                        );
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
                      invite.status === 'declined' ? 'text-white' : 'primary'
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
  );
}
