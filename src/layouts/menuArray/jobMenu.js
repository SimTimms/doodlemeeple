export default function jobMenu(counts, pageValues, onClickEvent) {
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
      count: counts.jobAds,
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
          machineName: 'editing_job',
          link: () =>
            onClickEvent({
              ...pageValues,
              primaryPage: 'job_dashboard',
              secondaryPage: 'editing_job',
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
