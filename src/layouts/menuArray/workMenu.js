export default function workMenu(counts, menu, onClickEvent) {
  return [
    {
      name: 'My Work',
      icon: 'work',
      machineName: 'my_work',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            primaryPage: 'my_work',
            secondaryPage: 'active_work',
            jobId: null,
          },
        }),
      count: counts.myWork,
    },
    {
      name: 'Invites',
      icon: 'local_activity',
      machineName: 'invites',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            primaryPage: 'invites',
            secondaryPage: 'invite_list',
            jobId: null,
          },
        }),

      count: counts.invites,
    },
    {
      name: 'Quotes',
      icon: 'local_activity',
      machineName: 'quotes',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            primaryPage: 'quotes',
            secondaryPage: 'quote_list',
            jobId: null,
          },
        }),

      count: counts.quotes,
    },

    {
      name: 'History',
      icon: 'history',
      machineName: 'history',

      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            primaryPage: 'history',
            secondaryPage: 'quote_list',
            jobId: null,
          },
        }),
      count: counts.history,
    },
    menu.workPage.jobId
      ? {
          name: 'Dashboard',
          icon: 'local_activity',
          machineName: 'work_dashboard',
          link: () =>
            menu.updateMenuContext({
              ...menu,
              workPage: {
                ...menu.workPage,
                secondaryPage: 'work_dashboard_home',
                jobId: null,
              },
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
