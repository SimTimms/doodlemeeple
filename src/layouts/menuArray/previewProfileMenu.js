export default function previewProfileMenu(history, counts, mainMenuContext) {
  return [
    {
      name: 'Profile',
      icon: 'face',
      machineName: 'profile',
      link: () => mainMenuContext.updateMenuContext({ primaryPage: 'profile' }),
      count: null,
    },
    {
      name: 'Games',
      icon: 'casino',
      machineName: 'games',
      link: () => mainMenuContext.updateMenuContext({ primaryPage: 'games' }),
      count: null,
    },
    {
      name: 'Job Ads',
      icon: 'post_add',
      machineName: 'jobs',
      link: () => mainMenuContext.updateMenuContext({ primaryPage: 'jobs' }),
      count: null,
    },
    {
      name: 'Kickstarters',
      icon: 'view_in_ar',
      machineName: 'kickstarters',
      link: () =>
        mainMenuContext.updateMenuContext({ primaryPage: 'kickstarters' }),
      count: null,
    },
  ];
}
