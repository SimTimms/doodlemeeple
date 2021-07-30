export default function gameMenu(onClickEvent) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'games',
      link: () => onClickEvent('games'),
      count: null,
    },
    {
      name: 'My Games',
      icon: 'dynamic_feed',
      machineName: 'my_games',
      link: () => onClickEvent('my_games'),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_game',
      link: () => onClickEvent('create_game'),
      count: null,
    },
  ];
}
