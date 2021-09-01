export default function gameProfileMenu(pageValues, setPageValues) {
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
      name: 'Game',
      icon: 'casino',
      machineName: 'game_profile',
      link: () => setPageValues({ ...pageValues, secondaryPage: 'games' }),
      count: null,
    },
  ];
}
