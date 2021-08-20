export default function gameMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'games',
      link: () => setPageValues({ ...pageValues, secondaryPage: 'games' }),
      count: null,
    },
    {
      name: 'My Games',
      icon: 'dynamic_feed',
      machineName: 'my_games',
      link: () => setPageValues({ ...pageValues, secondaryPage: 'my_games' }),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_game',
      link: () =>
        setPageValues({ ...pageValues, secondaryPage: 'create_game' }),
      count: null,
    },
  ];
}
