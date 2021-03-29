import React from 'react';
import autosave from '../../utils/autosave';
import { IconTitle, InlineHeader, DMCard, IconButton, Column } from '../';

export default function RoleObject({
  profile,
  setProfile,
  SignupMutation,
  ...props
}) {
  const { onClickEvent } = props;

  return (
    <DMCard>
      <InlineHeader>
        <IconTitle icon="help" title="What are you here for?" />
      </InlineHeader>
      <Column>
        <div style={{ width: 300 }}>
          <IconButton
            title="I'm here to offer my skills"
            icon="brush"
            styleOverride={{ width: '100%' }}
            iconPos="right"
            onClickEvent={() => {
              setProfile({
                ...profile,
                creativeTrue: true,
                creatorTrue: false,
              });
              autosave(SignupMutation, 'username');
              onClickEvent();
            }}
          />
          <IconButton
            title="I'm here to hire professionals"
            icon="work"
            iconPos="right"
            styleOverride={{ width: '100%' }}
            onClickEvent={() => {
              setProfile({
                ...profile,
                creativeTrue: false,
                creatorTrue: true,
              });
              autosave(SignupMutation, 'username');
              onClickEvent();
            }}
          />
          <IconButton
            title="Both"
            icon="work"
            iconPos="right"
            styleOverride={{ width: '100%' }}
            onClickEvent={() => {
              setProfile({
                ...profile,
                creativeTrue: true,
                creatorTrue: true,
              });
              autosave(SignupMutation, 'username');
              onClickEvent();
            }}
          />
        </div>
      </Column>
    </DMCard>
  );
}
