import React from 'react';
import { Typography, Slide } from '@material-ui/core';
import {
  Column,
  Divider,
  DividerMini,
  IconButton,
  UnlockInfo,
  CardComponent,
} from '../';

export default function NoticeBoardSecondary({
  children,
  title,
  subTitle,
  onClickEvent,
  buttonLocked,
  lockedMsg,
  ...props
}) {
  const { backEvent } = props;
  return (
    <Column w={700} m="10px 0 0 0">
      <CardComponent>
        <Column>
          <Typography>{title}</Typography>
          <DividerMini />
          {subTitle !== '' && <Typography>{subTitle}</Typography>}
          <Divider />
          {children}
          {buttonLocked ? (
            <UnlockInfo str={lockedMsg} />
          ) : (
            onClickEvent !== null && (
              <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <div>
                  <IconButton
                    title="Continue"
                    icon="chevron_right"
                    iconPos="right"
                    color="primary"
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
              color="text-dark"
              onClickEvent={() => backEvent()}
            />
          ) : null}
        </Column>
      </CardComponent>
    </Column>
  );
}
