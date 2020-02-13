import jamie from '../assets/jamie.jpg';
import man from '../assets/man.jpg';

export const notificationsTemp = [
  {
    id: 'NOTIFICATION123',
    title: 'Reply',
    summary: 'Jamie Noble has replied to your invite',
    icon: 'message',
    projectId: 'ID122',
    time: '1 hour ago',
    user: {
      id: 'JAMIENOBLE',
      userName: 'Jamie Noble',
      profileImg: jamie,
    },
  },
  {
    id: 'NOTIFICATION123',
    title: 'Reply',
    summary: 'Jamie Noble has accepted your invite',
    icon: 'check_circle',
    projectId: 'ID122',

    time: '2 hours ago',
    user: {
      id: 'JAMIENOBLE',
      userName: 'Jamie Noble',
      profileImg: jamie,
    },
  },
  {
    id: 'NOTIFICATION123',
    title: 'Decline',
    summary: 'Duke Johnson has declined your invite',
    projectId: 'ID123',
    icon: 'close',
    time: '3 days ago',
    user: {
      id: 'DUKEJOHNSON',
      userName: 'Duke Johnson',
      profileImg: man,
    },
  },
  {
    id: 'NOTIFICATION123',
    title: 'Decline',
    summary: 'Tim Simms has sent you a message',
    projectId: 'ID122',
    time: '1 week ago',
    icon: 'message',
    user: {
      id: 'DUKEJOHNSON',
      userName: 'Duke Johnson',
      profileImg: man,
    },
  },
];
