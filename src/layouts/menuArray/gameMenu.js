export default function gameMenu(onClickEvent) {
  return [
    {
      name: 'Browse',
      icon: 'casino',
      machineName: 'games',
      link: () => onClickEvent('games'),
      count: null,
    },
    {
      name: 'My Games',
      icon: 'casino',
      machineName: 'my_games',
      link: () => onClickEvent('my_games'),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add',
      machineName: 'create_game',
      link: () => onClickEvent('create_game'),
      count: null,
    },
  ];
}
