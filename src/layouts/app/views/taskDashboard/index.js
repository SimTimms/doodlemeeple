import React from 'react';
import { NoticeBoard, MiniDashCreator, Column } from '../../../../components';

export default function TaskDashboard({ history, profile, setProfile }) {
  return (
    <Column>
      <NoticeBoard
        profile={profile}
        setProfile={setProfile}
        history={history}
      />
      <MiniDashCreator profile={profile} history={history} />
    </Column>
  );
}
