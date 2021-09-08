export default function jobBoardMenu(menu) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        menu.updateMenuContext({
          primaryPage: menu.primaryPage,
          jobPage: { ...menu.jobPage, jobId: null, primaryPage: 'job_board' },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
          },
        }),
      count: null,
    },
    {
      name: 'Viewing Job',
      icon: 'work',
      machineName: 'viewing_job',
      link: () =>
        menu.updateMenuContext({
          primaryPage: menu.primaryPage,
          jobPage: {
            ...menu.jobPage,
            primaryPage: 'job_board',
            secondaryPage: 'viewing_job',
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
