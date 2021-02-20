import React from 'react';
import autosave from '../../utils/autosave';
import { IconTitle, InlineHeader, DMCard, IconButton, Column } from '../';
import click from '../../assets/notification_simple-01.wav';

export default function RoleObject({ profile, setProfile, SignupMutation }) {
  const clickAudio = new Audio(click);
  const playSound = (audioFile) => {
    audioFile.play();
  };

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
              playSound(clickAudio);
              setProfile({
                ...profile,
                creativeTrue: true,
                creatorTrue: false,
              });
              autosave(SignupMutation, 'username');
            }}
          />
          <IconButton
            title="I'm here to hire professionals"
            icon="work"
            iconPos="right"
            styleOverride={{ width: '100%' }}
            onClickEvent={() => {
              playSound(clickAudio);
              setProfile({
                ...profile,
                creativeTrue: false,
                creatorTrue: true,
              });
              autosave(SignupMutation, 'username');
            }}
          />
          <IconButton
            title="Both"
            icon="work"
            iconPos="right"
            styleOverride={{ width: '100%' }}
            onClickEvent={() => {
              playSound(clickAudio);
              setProfile({
                ...profile,
                creativeTrue: true,
                creatorTrue: true,
              });
              autosave(SignupMutation, 'username');
            }}
          />
        </div>
      </Column>
    </DMCard>
  );
}
