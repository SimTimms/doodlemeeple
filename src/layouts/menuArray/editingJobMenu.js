export default function editingJobMenu(menu) {
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
            secondaryPage: 'job_ads_secondary',
          },
        }),

      count: null,
    },
    {
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

      count: null,
    },
  ];
}
