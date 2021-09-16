import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  IconButton,
  ColumnWrapper,
  HeaderTwo,
  Column,
  Divider,
  Row,
  CardComponent,
  ProfileAvatar,
} from '../../../../../../components';

export default function CreativeView({
  job,
  history,
  setConversationUser,
  setChatOpen,
  chatOpen,
  displayChat,
}) {
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.rootRow}>
        <ColumnWrapper>
          <Column j="center" a="center">
            <HeaderTwo str="Project Client" />
            <Divider />
            <CardComponent styleOverride={{ width: 400 }}>
              <Row j="flex-start" a="center">
                <Row j="flex-start" a="center">
                  <ProfileAvatar
                    profilePage={`/app/user-profile/${job.user._id}`}
                    title={job.user.name}
                    bgImg={job.user.profileImg}
                    history={history}
                    declined={false}
                  />

                  <Typography>{job.user.name}</Typography>
                </Row>
                {displayChat && (
                  <IconButton
                    disabled={false}
                    color="primary"
                    icon="chat"
                    title="Chat"
                    onClickEvent={() => {
                      setConversationUser(job.user);
                      setChatOpen(chatOpen ? false : true);
                    }}
                    styleOverride={null}
                    type="button"
                    iconPos="left"
                  />
                )}
              </Row>
            </CardComponent>
          </Column>
        </ColumnWrapper>
      </div>
    </Slide>
  );
}
