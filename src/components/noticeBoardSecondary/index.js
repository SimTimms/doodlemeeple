import React from 'react';
import { Typography, Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Divider, IconButton, UnlockInfo } from '../';

export default function NoticeBoardSecondary({
  children,
  title,
  subTitle,
  onClickEvent,
  buttonLocked,
  lockedMsg,
}) {
  const classes = useStyles();

  return (
    <div className={classes.noticeArea}>
      <Column>
        <Typography variant="h4">{title}</Typography>
        <Divider />
        {subTitle !== '' && (
          <Typography
            variant="h6"
            align="center"
            style={{ color: '#fff', marginBottom: 10 }}
          >
            {subTitle}
          </Typography>
        )}
        {children}

        {buttonLocked ? (
          <UnlockInfo str={lockedMsg} c="#fff" />
        ) : (
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
        )}
      </Column>
    </div>
  );
}
