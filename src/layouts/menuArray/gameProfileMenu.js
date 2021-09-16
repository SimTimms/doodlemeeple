export default function gameProfileMenu(menu) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          homePage: {
            ...menu.homePage,
            primaryPage: 'games',
            secondaryPage: 'games',
          },
        }),
      count: null,
    },
    {
      name: 'Game Profile',
      icon: 'casino',
      machineName: 'game_profile',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          homePage: {
            ...menu.homePage,
            secondaryPage: 'game_profile',
          },
        }),
      count: null,
    },
  ];
}
