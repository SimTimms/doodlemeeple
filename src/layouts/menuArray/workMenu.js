export default function workMenu(counts, pageValues, onClickEvent) {
  return [
    {
      name: 'My Work',
      icon: 'work',
      machineName: 'my_work',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'my_work',
          secondaryPage: 'active_work',
          jobId: null,
        }),
      count: counts.myWork,
    },
    {
      name: 'Invites',
      icon: 'local_activity',
      machineName: 'invites',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'invites',
          secondaryPage: 'invite_list',
          jobId: null,
        }),
      count: counts.invites,
    },
    {
      name: 'Quotes',
      icon: 'local_activity',
      machineName: 'quotes',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'quotes',
          secondaryPage: 'quote_list',
          jobId: null,
        }),
      count: counts.quotes,
    },

    {
      name: 'History',
      icon: 'history',
      machineName: 'history',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'history' }),
    },
    pageValues.jobId
      ? {
          name: 'Dashboard',
          icon: 'local_activity',
          machineName: 'work_dashboard',
          link: () =>
            onClickEvent({
              ...pageValues,
              secondaryPage: 'work_dashboard_home',
            }),
          count: null,
        }
      : {
          name: 'Locked',
          icon: 'lock',
          machineName: 'work_dashboard',
          link: () => null,
          count: null,
          disabled: true,
        },
  ];
}
