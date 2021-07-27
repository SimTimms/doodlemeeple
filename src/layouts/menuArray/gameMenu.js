export default function gameMenu(history, counts, onClickEvent) {
  return [
    {
      name: 'Browse Games',
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
  ];
}
