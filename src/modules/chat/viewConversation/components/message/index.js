import React from 'react';
import { Typography, Card, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { timeDifferenceForDate } from '../../../../../utils/dates';
import { IconButton } from '../../../../../components';
import Cookies from 'js-cookie';
import device from '../../../../../assets/device.svg';

export function Message({ message, history, setViewer }) {
  const classes = useStyles();
  const isUserMessage = message.sender._id !== Cookies.get('userId');
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <Card
      className={clsx({
        [classes.card]: true,
        [classes.card]: mobile,
        [classes.cardOther]: !isUserMessage,
        [classes.cardOtherMobile]: !isUserMessage && mobile,
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
                src={
                  message.sender.profileImg ? message.sender.profileImg : device
                }
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
                {message.type !== 'upload' ? (
                  <Typography
                    color="textPrimary"
                    component="p"
                    style={{
                      maxWidth: '500px',
                      overflowWrap: 'break-word',
                      fontFamily: 'arial, sans-serif',
                    }}
                  >
                    {message.messageStr.indexOf('QUOTE SUBMITTED:') === -1 ? (
                      message.messageStr
                    ) : !isUserMessage ? (
                      <IconButton
                        title="Quote Submitted"
                        icon="request_quote"
                        color="p"
                        disabled={false}
                        styleOverride={null}
                        onClickEvent={() =>
                          history.push(
                            `/app/edit-contract/${message.messageStr.replace(
                              'QUOTE SUBMITTED:',
                              ''
                            )}`
                          )
                        }
                        type="button"
                        iconPos="right"
                      />
                    ) : (
                      <IconButton
                        title="View Quote"
                        icon="request_quote"
                        color="warning"
                        disabled={false}
                        styleOverride={null}
                        onClickEvent={() =>
                          history.push(
                            `/app/view-contract/${message.messageStr.replace(
                              'QUOTE SUBMITTED:',
                              ''
                            )}`
                          )
                        }
                        type="button"
                        iconPos="right"
                      />
                    )}
                  </Typography>
                ) : (
                  <img
                    src={message.messageStr}
                    style={{ maxWidth: 300, cursor: 'pointer' }}
                    onClick={() => setViewer(message.messageStr)}
                    alt=""
                  />
                )}
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
                src={
                  message.sender.profileImg ? message.sender.profileImg : device
                }
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}