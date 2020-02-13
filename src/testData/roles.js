import tim from 'src/assets/tim.jpg';
import jamie from 'src/assets/jamie.jpg';
import man from 'src/assets/man.jpg';

export const rolesArrayTemp = [
  {
    id: 'ROLE123',
    title: 'Graphic Artist',
    summary: 'I need a graphic artist',
    projectId: 'ID122',
    creatives: ['Graphic Artist'],
    keywords: ['Fantasy'],
    status: 'active',
    workers: [{ id: 'JAMIENOBLE', userName: 'Jamie Noble', profileImg: jamie }],
    invitees: [],
  },
  {
    id: 'ROLE124',
    title: 'Fantasy Artist',
    summary: 'I need a fantasy artist',
    projectId: 'ID122',
    creatives: ['Digital Artist'],
    keywords: ['Fantasy'],
    status: 'hiring',
    workers: [],
    invitees: [
      { id: 'JAMIENOBLE', userName: 'Jamie Noble', profileImg: jamie },
      { id: 'DUKEJOHNSON', userName: 'Duke Johnson', profileImg: man },
      { id: 'TIMSIMMS', userName: 'Tim Simms', profileImg: tim },
    ],
  },
];
