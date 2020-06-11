import React from 'react';
import { Typography, Card } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { timeDifferenceForDate } from '../../../../../../../utils/dates';
import Cookies from 'js-cookie';

export function Message({ message, history }) {
  const classes = useStyles();
  const isUserMessage = message.sender.id !== Cookies.get('userId');

  return (
    <Card
      className={clsx({
        [classes.card]: true,
        [classes.cardOther]: !isUserMessage,
      })}
    >
      <div className={classes.rowWrapper}>
        <div className={classes.messageButton}>
          {isUserMessage && (
            <div
              className={clsx({
                [classes.notifications]: true,
              })}
            >
              <img
                className={clsx({
                  [classes.icon]: true,
                })}
                src={message.sender.profileImg}
                alt=""
              />
            </div>
          )}
          <div className={classes.profileWrapper}>
            <div className={classes.wrapperOne}>
              <div className={classes.messageDetails}>
                <div
                  className={classes.rowWrapper}
                  style={{ justifyContent: 'space-between' }}
                >
                  <Typography
                    variant="caption"
                    component="p"
                    className={clsx({
                      [classes.name]: true,
                      [classes.nameOther]: !isUserMessage,
                    })}
                  >
                    <b>{message.sender.name}</b>
                  </Typography>
                  <Typography
                    variant="caption"
                    style={{ color: '#aaa', marginLeft: 10 }}
                    component="p"
                  >
                    <b>{timeDifferenceForDate(message.createdAt)}</b>
                  </Typography>
                </div>
                <Typography color="textPrimary" component="p">
                  {message.messageStr.indexOf('QUOTE SUBMITTED:') === -1 ? (
                    message.messageStr
                  ) : (
                    <button
                      onClick={() =>
                        history.push(
                          message.messageStr.replace('QUOTE SUBMITTED:', ''),
                        )
                      }
                    >
                      View Quote
                    </button>
                  )}
                </Typography>
              </div>
            </div>
          </div>
          {!isUserMessage && (
            <div
              className={clsx({
                [classes.notifications]: true,
                [classes.notificationsOther]: true,
              })}
            >
              <img
                className={clsx({
                  [classes.icon]: true,
                })}
                src={message.sender.profileImg}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
