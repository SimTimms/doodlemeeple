import { rolesArrayTemp } from './roles';
import { conversationsData } from './conversations';
import { projectObject, projectObjectTwo } from './projects';
import { notificationsTemp } from './notifications';

export const dashboardTemp = {
  roles: rolesArrayTemp,
  notifications: notificationsTemp,
  conversations: conversationsData,
  projects: [projectObject, projectObjectTwo],
};
