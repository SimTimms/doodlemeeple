export default function jobMenuSecondary(counts, menu) {
  return [
    {
      name: 'My Ads List',
      icon: 'dynamic_feed',
      machineName: 'job_ads',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: { ...menu.jobPage, secondaryPage: 'job_ads' },
        }),
      count: counts.myJobAds,
    },
    {
      name: 'Create Ad',
      icon: 'add_circle',
      machineName: 'create_job_ad',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          jobPage: { ...menu.jobPage, secondaryPage: 'create_job_ad' },
        }),
      count: null,
    },
  ];
}
