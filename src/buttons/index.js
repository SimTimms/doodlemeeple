import React from 'react';
import { MenuButtonShortcut } from '../components';
import { ProfileContext, HistoryContext } from '../context';

export function ProfileAvatarButton() {
  return (
    <ProfileContext.Consumer>
      {(profile) => (
        <HistoryContext.Consumer>
          {(history) => (
            <MenuButtonShortcut
              text={{
                name: profile ? profile.name : 'Fetching...',
                color: '#222',
                icon: 'face',
                count: 0,
              }}
              onClickEvent={() => {
                history.push('/app/edit-profile');
              }}
              active={false}
              imageIcon={profile && profile.profileImg}
              countIcon="star"
              iconPos="right"
            />
          )}
        </HistoryContext.Consumer>
      )}
    </ProfileContext.Consumer>
  );
}
