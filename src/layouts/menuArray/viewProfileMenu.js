export default function viewProfileMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'games',
          secondaryPage: 'games',
        }),
      count: null,
    },
    {
      name: 'Profile',
      icon: 'face',
      machineName: 'game_user_profile',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'game_user_profile',
        }),
      count: null,
    },
    {
      name: 'Games',
      icon: 'casino',
      machineName: 'user_games',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'user_games',
        }),
      count: null,
    },
  ];
}
