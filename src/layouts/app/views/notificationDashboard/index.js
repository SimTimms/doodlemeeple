import React from 'react';
import { TaskComponent, Column } from '../../../../components';
import NoticeBoard from './noticeBoard';

export default function NotificationDashboard({
  history,
  profile,
  setProfile,
}) {
  return (
    <Column>
      <NoticeBoard
        profile={profile}
        setProfile={setProfile}
        history={history}
      />
      <TaskComponent profile={profile} history={history} />
    </Column>
  );
}
