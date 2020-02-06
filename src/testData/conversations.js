import tim from 'src/assets/tim.jpg';
import jamie from 'src/assets/jamie.jpg';
import man from 'src/assets/man.jpg';

export const conversationsData = [
  {
    id: 'CONV123',
    projectId: 'ID123',
    groupMembers: [
      { id: 'TIMSIMMS', profileImg: tim, name: 'Tim Simms' },
      { id: 'JAMIENOBLE', profileImg: jamie, name: 'Jamie Noble' },
      { id: 'DUKEJOHNSON', profileImg: man, name: 'Duke Johnson ' },
    ],
    lastMessage: '12th May 2019 12:01:02',
    lastMessageReadBy: ['TIMSIMMS', 'DUKEJOHNSON'],
    conversation: [
      {
        id: '001',
        dateCreated: '12th May 2019',
        speaker: 'TIMSIMMS',
        messageStr: 'Hi Jamie, do you like my hat>',
      },
    ],
  },
  {
    id: 'CONV124',
    projectId: 'ID124',
    groupMembers: [
      { id: 'TIMSIMMS', profileImg: tim, name: 'Tim Simms' },
      { id: 'JAMIENOBLE', profileImg: man, name: 'Jamie Noble' },
    ],
    lastMessage: '12th May 2019 12:01:02',
    lastMessageReadBy: ['DUKEJOHNSON'],
    conversation: [
      {
        id: '001',
        dateCreated: '12th May 2019',
        speaker: 'TIMSIMMS',
        messageStr: 'Hi Jamie, do you like my hat>',
      },
    ],
  },
];
