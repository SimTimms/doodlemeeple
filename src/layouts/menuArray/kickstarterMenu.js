export default function kickstarterMenu(onClickEvent) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'kickstarters',
      link: () => onClickEvent('kickstarters'),
      count: null,
    },
    {
      name: 'My Kickstarters',
      icon: 'dynamic_feed',
      machineName: 'my_kickstarters',
      link: () => onClickEvent('my_kickstarters'),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_kickstarter',
      link: () => onClickEvent('create_kickstarter'),
      count: null,
    },
  ];
}
