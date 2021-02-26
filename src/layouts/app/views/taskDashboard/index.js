import React from 'react';
import { NoticeBoard, TaskComponent, Column } from '../../../../components';

export default function TaskDashboard({ history, profile, setProfile }) {
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
