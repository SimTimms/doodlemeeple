export default function previewProfileMenu(history, counts) {
  return [
    {
      name: 'Profile',
      icon: 'home',
      machineName: 'home',
      link: () => history.push('/app/home'),
      count: null,
    },
    {
      name: 'Games',
      icon: 'notifications',
      machineName: 'tasks',
      link: () => history.push('/app/tasks'),
      count: null,
    },
    {
      name: 'Job Ads',
      icon: 'post_add',
      machineName: 'jobs',
      link: () => history.push('/app/jobs'),
      count: { icon: 'star', count: counts.jobAds },
    },
    {
      name: 'Kickstarters',
      icon: 'work',
      machineName: 'work',
      link: () => history.push('/app/work'),
      count: { icon: 'star', count: counts.work },
    },
  ];
}
