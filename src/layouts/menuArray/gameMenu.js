export default function gameMenu(menu) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'games',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'games',
            gameId: null,
          },
        }),
      count: null,
    },
    {
      name: 'My Games',
      icon: 'dynamic_feed',
      machineName: 'my_games',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'my_games',
            gameId: null,
          },
        }),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_game',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'create_game',
            gameId: 'new',
          },
        }),
      count: null,
    },
  ];
}
