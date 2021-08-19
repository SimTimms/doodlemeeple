export default function jobMenuSecondary(counts, pageValues, onClickEvent) {
  return [
    {
      name: 'My Ads List',
      icon: 'dynamic_feed',
      machineName: 'job_ads',
      link: () => onClickEvent({ ...pageValues, secondaryPage: 'job_ads' }),
      count: counts.myJobAds,
    },
    {
      name: 'Create Ad',
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
