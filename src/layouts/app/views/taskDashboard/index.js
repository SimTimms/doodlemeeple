import React from 'react';
import { NoticeBoard, TaskComponent, TabPage } from '../../../../components';
import { taskMenu } from '../../../menuArray';

export default function TaskDashboard({
  history,
  profile,
  drawerButtonChange,
}) {
  return (
    <TabPage
      title={null}
      primaryMenu={taskMenu()}
      secondaryMenu={null}
      menu={null}
      activePrimary={'tasks'}
      activeSecondary={''}
    >
      <TaskComponent
        profile={profile}
        history={history}
        drawerButtonChange={drawerButtonChange}
      />
    </TabPage>
  );
}
