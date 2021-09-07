export default function viewProfileMenu(pageValues, setPageValues, backValues) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        setPageValues({
          ...pageValues,
          ...backValues,
        }),
      count: null,
    },
    {
      name: 'Profile',
      icon: 'face',
      machineName: 'user_profile',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'user_profile',
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
