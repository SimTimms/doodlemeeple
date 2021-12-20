import React, { useEffect } from 'react';
import { Typography, Slide } from '@material-ui/core';
import {
  Column,
  Divider,
  DividerMini,
  MenuButtonStandardText,
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
  buttonTitle,
  buttonIcon,
  minimisable,
  ...props
}) {
  const { backEvent } = props;
  const [minimiseOpen, setMinimiseOpen] = React.useState(false);

  useEffect(() => {
    setMinimiseOpen(minimisable ? false : true);
  }, [minimisable]);

  if (!minimiseOpen) {
    return (
      <Column p="0 10px 0 10px">
        <CardComponent
          styleOverride={{ maxWidth: 800, marginLeft: 10, marginRight: 10 }}
        >
          <Column>
            <Typography>{title}</Typography>
            <MenuButtonStandardText
              title="Post a Job"
              icon=""
              iconPos="left"
              color="text-dark"
              onClickEvent={() => setMinimiseOpen(true)}
            />
          </Column>
        </CardComponent>
      </Column>
    );
  }
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
                    title={buttonTitle ? buttonTitle : 'Continue'}
                    icon={buttonIcon ? buttonIcon : 'chevron_right'}
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
          {minimisable && minimiseOpen && (
            <MenuButtonStandardText
              title="Cancel"
              icon=""
              iconPos="left"
              color="text-dark"
              onClickEvent={() => setMinimiseOpen(false)}
            />
          )}
        </Column>
        <Divider />
      </CardComponent>
    </Column>
  );
}
