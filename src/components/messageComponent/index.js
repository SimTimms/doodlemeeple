import React from 'react';
import { Typography, Button, Icon } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import device from '../../assets/device.svg';

export default function MessageComponent({
  history,
  backgroundImg,
  profiles,
  subtitle,
  count,
  title,
  miniProfile,
  onClickEvent,
  disabled,
}) {
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
            {profiles ? (
              profiles.map((user, index) => (
                <div
                  key={`part_${index}`}
                  className={clsx({
                    [classes.icon]: true,
                  })}
                  style={{
                    backgroundImage: `url(${
                      user.profileImg ? user.profileImg : device
                    })`,
                  }}
                />
              ))
            ) : (
              <div
                className={clsx({
                  [classes.icon]: true,
                })}
                style={{ backgroundImage: `url(${backgroundImg})` }}
              />
            )}
            {count ? (
              <Typography
                variant="body1"
                component="p"
                className={clsx({
                  [classes.count]: true,
                  [classes.countOff]: count < 1,
                })}
              >
                {count < 9 ? count : '9+'}
              </Typography>
            ) : null}
          </div>
          <div className={classes.profileWrapper}>
            <div className={classes.wrapperOne}>
              <div className={classes.messageDetails}>
                <div className={classes.rowWrapper}>
                  {backgroundImg && miniProfile && (
                    <div
                      className={clsx({
                        [classes.icon]: true,
                        [classes.iconGame]: true,
                      })}
                      style={{
                        backgroundImage: `url(${backgroundImg})`,
                      }}
                    />
                  )}
                  <Typography
                    style={{ color: '#aaa' }}
                    variant="caption"
                    component="p"
                  >
                    <b>
                      {title.length > 30
                        ? `${title.substring(0, 30)}...`
                        : title}
                    </b>
                  </Typography>
                </div>
                <Typography
                  style={{ textAlign: 'right' }}
                  variant="body1"
                  component="p"
                >
                  {subtitle}
                </Typography>
              </div>
            </div>
          </div>
          {!disabled && (
            <div
              style={{
                minWidth: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                onClick={() => onClickEvent()}
                className={classes.nextButton}
              >
                <Icon>chevron_right</Icon>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
