import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { MARK_AS_READ } from '../../../../../../../data/mutations';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import Cookies from 'js-cookie';

export function MessageComponent({ conversation, history }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.rowWrapper}>
        <div className={classes.messageButton}>
          <div
            className={clsx({
              [classes.notifications]: true,
            })}
          >
            <div
              className={clsx({
                [classes.icon]: true,
                [classes.iconGame]: true,
              })}
              style={{
                backgroundImage: `url(${conversation.job.game.backgroundImg})`,
              }}
            />
            {conversation.participants.map((user, index) => (
              <div
                key={`part_${index}`}
                className={clsx({
                  [classes.icon]: true,
                })}
                style={{ backgroundImage: `url(${user.profileImg})` }}
              />
            ))}

            <Typography
              variant="body1"
              component="p"
              className={clsx({
                [classes.count]: true,
                [classes.countOff]: conversation.unreadMessages < 1,
              })}
            >
              {conversation.unreadMessages < 9
                ? conversation.unreadMessages
                : '9+'}
            </Typography>
          </div>
          <div className={classes.profileWrapper}>
            <div className={classes.wrapperOne}>
              <div className={classes.messageDetails}>
                <div className={classes.rowWrapper}>
                  <Typography
                    style={{ color: '#aaa' }}
                    variant="caption"
                    component="p"
                  >
                    <b>{conversation.job.name}</b>
                  </Typography>
                </div>
                <Typography
                  style={{ textAlign: 'right' }}
                  variant="body1"
                  component="p"
                >
                  {conversation.participants.map(
                    (user) => user.id !== Cookies.get('userId') && user.name,
                  )}
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              minWidth: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Mutation
              mutation={MARK_AS_READ}
              variables={{
                conversationId: conversation.id,
              }}
              onCompleted={() => {
                history.push(`/messages/view-conversation/${conversation.id}`);
              }}
            >
              {(mutation) => {
                return (
                  <Button
                    onClick={() => mutation()}
                    className={classes.nextButton}
                  >
                    <Icon>chevron_right</Icon>
                  </Button>
                );
              }}
            </Mutation>
          </div>
        </div>
      </div>
    </Card>
  );
}
