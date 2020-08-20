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
}) {
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.rootRow}>
        <ColumnWrapper>
          <Column j="center" a="center">
            <HeaderTwo str="Project Creator" />
            <Divider />
            <CardComponent>
              <Row j="flex-start" a="center">
                <Row j="flex-start" a="center">
                  <ProfileAvatar
                    profilePage={`/app/public-preview/${job.user._id}`}
                    title={job.user.name}
                    bgImg={job.user.profileImg}
                    history={history}
                    declined={false}
                  />

                  <Typography>{job.user.name}</Typography>
                </Row>

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
              </Row>
            </CardComponent>
          </Column>
        </ColumnWrapper>
      </div>
    </Slide>
  );
}
