export default function previewProfileMenu(history, counts, menu) {
  return [
    {
      name: 'Profile',
      icon: 'face',
      machineName: 'profile',
      link: () => menu.updateMenuContext({ ...menu, publicPage: 'profile' }),
      count: null,
    },
    {
      name: 'Games',
      icon: 'casino',
      machineName: 'games',
      link: () => menu.updateMenuContext({ ...menu, publicPage: 'games' }),
      count: null,
    },
    {
      name: 'Job Ads',
      icon: 'post_add',
      machineName: 'jobs',
      link: () => menu.updateMenuContext({ ...menu, publicPage: 'jobs' }),
      count: null,
    },
    {
      name: 'Kickstarters',
      icon: 'view_in_ar',
      machineName: 'kickstarters',
      link: () =>
        menu.updateMenuContext({ ...menu, publicPage: 'kickstarters' }),
      count: null,
    },
  ];
}
