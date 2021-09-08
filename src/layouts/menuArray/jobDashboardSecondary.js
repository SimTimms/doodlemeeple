export default function jobDashboardSecondary(counts, menu) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: {
            ...menu.jobPage,
            primaryPage: 'job_posts',
            secondaryPage: 'job_ads',
          },
        }),
      count: null,
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      machineName: 'job_dashboard',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: {
            ...menu.jobPage,
            secondaryPage: 'job_dashboard',
          },
        }),

      count: null,
    },

    {
      name: 'Quotes',
      icon: 'list_alt',
      machineName: 'quotes_in',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: {
            ...menu.jobPage,
            secondaryPage: 'quotes_in',
          },
        }),
      count: counts.jobAds,
    },
    {
      name: 'Ad Preview',
      icon: 'list_alt',
      machineName: 'job_details',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: {
            ...menu.jobPage,
            secondaryPage: 'job_details',
          },
        }),
      count: null,
    },
    {
      name: 'Edit',
      icon: 'edit',
      machineName: 'edit_job',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: {
            ...menu.jobPage,
            secondaryPage: 'edit_job',
          },
        }),
      count: null,
    },
  ];
}
