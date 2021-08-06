export default function workMenuSecondary(pageValues, onClickEvent) {
  return [
    {
      name: 'My Job Ads',
      icon: 'dynamic_feed',
      machineName: 'job_ads',
      link: () => onClickEvent({ ...pageValues, secondaryPage: 'job_ads' }),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_job_ad',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'create_job_ad',
          jobId: null,
        }),
      count: null,
    },
  ];
}
