export default function jobMenu(counts, menu) {
  return [
    {
      name: 'Job Board',
      icon: 'work',
      machineName: 'job_board',
      link: () =>
        menu.updateMenuContext({
          primaryPage: menu.primaryPage,
          jobPage: {
            ...menu.jobPage,
            primaryPage: 'job_board',
            secondaryPage: null,
            jobId: null,
          },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
          },
        }),
      count: null,
    },
    {
      name: 'My Job Ads',
      icon: 'work',
      machineName: 'job_posts',
      link: () =>
        menu.updateMenuContext({
          primaryPage: menu.primaryPage,
          jobPage: {
            ...menu.jobPage,
            primaryPage: 'job_posts',
            secondaryPage: 'job_ads',
            jobId: null,
          },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
          },
        }),

      count: counts.jobAds,
    },
    {
      name: 'History',
      icon: 'history',
      machineName: 'job_history',
      link: () =>
        menu.updateMenuContext({
          primaryPage: menu.primaryPage,
          jobPage: {
            ...menu.jobPage,
            primaryPage: 'job_history',
            secondaryPage: null,
            jobId: null,
          },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
          },
        }),
    },
    menu.jobPage.jobId && menu.jobPage.primaryPage !== 'job_board'
      ? {
          name: 'Editing Job',
          icon: 'edit',
          machineName: 'editing_job',
          link: () =>
            menu.updateMenuContext({
              primaryPage: menu.primaryPage,
              jobPage: {
                ...menu.jobPage,
                primaryPage: 'job_dashboard',
                secondaryPage: 'editing_job',
              },
              workPage: { ...menu.workPage },
              homePage: {
                ...menu.homePage,
              },
            }),

          count: counts.jobAds,
        }
      : {
          name: 'Locked',
          icon: 'lock',
          machineName: 'job_dashboard',
          link: () => null,
          count: null,
          disabled: true,
        },
  ];
}
