export default function workMenu(pageValues, onClickEvent) {
  return [
    {
      name: 'My Job Ads',
      icon: 'grid_view',
      machineName: 'job_posts',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'job_posts',
          secondaryPage: 'job_ads',
        }),
      count: null,
    },
    {
      name: 'Invites',
      icon: 'local_activity',
      machineName: 'invites',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'invites' }),
      count: null,
    },
    {
      name: 'My Work',
      icon: 'work',
      machineName: 'my_work',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'my_work' }),
    },
    {
      name: 'Dashboard',
      icon: 'lock',
      machineName: 'job_dashboard',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'job_dashboard' }),
      count: null,
    },
    {
      name: 'History',
      icon: 'history',
      machineName: 'history',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'history' }),
    },
  ];
}
