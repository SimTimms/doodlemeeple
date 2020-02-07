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
        speaker: { id: 'TIMSIMMS', profileImg: tim },
        messageStr: 'Hi Jamie, do you like my hat?',
      },
      {
        id: '002',
        dateCreated: '12th May 2019',
        speaker: { id: 'JAMIENOBLE', profileImg: jamie },
        messageStr: "No Tim, it's a shit hat",
      },
      {
        id: '003',
        dateCreated: '12th May 2019',
        speaker: { id: 'TIMSIMMS', profileImg: tim },
        messageStr: "It's a blue hat and I love it.",
      },
      {
        id: '003',
        dateCreated: '12th May 2019',
        speaker: { id: 'JAMIENOBLE', profileImg: jamie },
        messageStr: 'Fuck you Tim! Fuck you and your hat',
      },
      {
        id: '003',
        dateCreated: '12th May 2019',
        speaker: { id: 'DUKEJOHNSON', profileImg: man },
        messageStr: "Please guys, don't argue",
      },
      {
        id: '003',
        dateCreated: '12th May 2019',
        speaker: { id: 'JAMIENOBLE', profileImg: jamie },
        messageStr: 'Fuck off Duke',
      },
      {
        id: '003',
        dateCreated: '12th May 2019',
        speaker: { id: 'TIMSIMMS', profileImg: tim },
        messageStr: 'Yeah fuck off Duke',
      },
    ],
  },
  {
    id: 'CONV124',
    projectId: 'ID124',
    groupMembers: [
      { id: 'DUKEJOHNSON', profileImg: tim, name: 'Duke Johnson' },
      { id: 'JAMIENOBLE', profileImg: man, name: 'Jamie Noble' },
    ],
    lastMessage: '12th May 2019 12:01:02',
    lastMessageReadBy: ['DUKEJOHNSON'],
    conversation: [
      {
        id: '001',
        dateCreated: '12th May 2019',
        speaker: { id: 'DUKEJOHNSON', profileImg: man },
        messageStr: 'Stroking my beard in the world of the weird',
      },
    ],
  },
];
