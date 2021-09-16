export default function kickstarterMenu(menu) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'kickstarters',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'kickstarters',
            kickstarterId: null,
          },
        }),
      count: null,
    },
    {
      name: 'My Kickstarters',
      icon: 'dynamic_feed',
      machineName: 'my_kickstarters',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'my_kickstarters',
            kickstarterId: null,
          },
        }),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_kickstarter',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'create_kickstarter',
            gameId: 'new',
          },
        }),
      count: null,
    },
  ];
}
