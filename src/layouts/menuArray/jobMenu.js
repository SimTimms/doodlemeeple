export default function jobMenu(counts, pageValues, onClickEvent) {
  console.log(counts.invites);
  return [
    {
      name: 'Job Board',
      icon: 'work',
      machineName: 'job_board',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'job_board',
          secondaryPage: null,
          jobId: null,
        }),
      count: null,
    },
    {
      name: 'My Job Ads',
      icon: 'work',
      machineName: 'job_posts',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'job_posts',
          secondaryPage: 'job_ads',
          jobId: null,
        }),
      count: counts.quotes,
    },
    {
      name: 'History',
      icon: 'history',
      machineName: 'job_history',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'job_history',
          jobId: null,
        }),
    },
    pageValues.jobId
      ? {
          name: 'Editing Job',
          icon: 'edit',
          machineName: 'job_dashboard',
          link: () =>
            onClickEvent({
              ...pageValues,
              primaryPage: 'job_dashboard',
              secondaryPage: 'job_dashboard',
            }),
          count: null,
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
