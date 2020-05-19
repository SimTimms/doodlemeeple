import React from 'react';
import { Typography, Icon } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import { timeDifferenceForDate } from '../../../../../../../utils/dates';
import { IconButton } from '../../../../../../../components/';

export function MessageComponent({ conversation, history }) {
  const classes = useStyles();
  console.log(conversation);
  return (
    <Card className={classes.card}>
      <div className={classes.rowWrapper}>
        <div className={classes.messageButton}>
          <div
            className={clsx({
              [classes.notifications]: true,
            })}
          >
            <img
              className={clsx({
                [classes.icon]: true,
              })}
              src={conversation.sender.profileImg}
            />
          </div>
          <div className={classes.profileWrapper}>
            <div className={classes.wrapperOne}>
              <div className={classes.messageDetails}>
                <div
                  className={classes.rowWrapper}
                  style={{ justifyContent: 'space-between' }}
                >
                  <Typography
                    style={{ color: '#aaa' }}
                    variant="caption"
                    component="p"
                  >
                    <b>{conversation.sender.name}</b>
                  </Typography>
                  <Typography
                    variant="caption"
                    style={{ color: '#aaa' }}
                    component="p"
                  >
                    <b>{timeDifferenceForDate(conversation.createdAt)}</b>
                  </Typography>
                </div>
                <Typography color="textPrimary" component="p">
                  {conversation.messageStr.substring(0, 24)}
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              width: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={() =>
                history.push(`/view-conversation/${conversation.id}`)
              }
              className={classes.nextButton}
            >
              <Icon>chevron_right</Icon>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
