import React from 'react';
import { Typography, Slide } from '@material-ui/core';
import {
  Column,
  Divider,
  DividerMini,
  MenuButtonStandard,
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
    <Column p="10px 10px 0 10px">
      <CardComponent
        styleOverride={{ maxWidth: 800, marginLeft: 10, marginRight: 10 }}
      >
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
                  <Divider />
                  <MenuButtonStandard
                    title="Continue"
                    icon="chevron_right"
                    iconPos="right"
                    color="primary"
                    onClickEvent={() => onClickEvent()}
                  />
                  <DividerMini />
                </div>
              </Slide>
            )
          )}
          {backEvent ? (
            <MenuButtonStandard
              title="Back"
              icon=""
              iconPos="left"
              color="text-dark"
              onClickEvent={() => backEvent()}
            />
          ) : null}
        </Column>
        <Divider />
      </CardComponent>
    </Column>
  );
}
