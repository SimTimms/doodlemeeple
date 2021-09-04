export default function viewProfileMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Profile',
      icon: 'face',
      machineName: 'profile',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'profile',
          secondaryPage: null,
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
          primaryPage: 'user_games',
          secondaryPage: null,
        }),
      count: null,
    },
  ];
}
