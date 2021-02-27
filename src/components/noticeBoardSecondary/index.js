import React from 'react';
import { Typography, Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Divider, DividerMini, IconButton, UnlockInfo } from '../';
import clsx from 'clsx';

export default function NoticeBoardSecondary({
  children,
  title,
  subTitle,
  onClickEvent,
  buttonLocked,
  lockedMsg,
  ...props
}) {
  const classes = useStyles();
  const { backEvent, subMenu } = props;
  return (
    <div
      className={clsx({
        [classes.noticeArea]: true,
        [classes.noticeAreaWithSubMenu]: subMenu,
      })}
    >
      <Column>
        <Typography variant="h4">{title}</Typography>
        <DividerMini />
        {subTitle !== '' && (
          <Typography
            variant="h6"
            align="center"
            style={{ color: '#fff', marginBottom: 10, maxWidth: 500 }}
          >
            {subTitle}
          </Typography>
        )}
        <Divider />
        {children}
        <Divider />
        {buttonLocked ? (
          <UnlockInfo str={lockedMsg} c="#fff" />
        ) : (
          onClickEvent !== null && (
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <div>
                <IconButton
                  title="Continue"
                  icon="chevron_right"
                  iconPos="right"
                  color="text-white"
                  onClickEvent={() => onClickEvent()}
                />
              </div>
            </Slide>
          )
        )}
        {backEvent ? (
          <IconButton
            title="Back"
            icon=""
            iconPos="left"
            color="text-white-mini"
            onClickEvent={() => backEvent()}
          />
        ) : null}
      </Column>
    </div>
  );
}
