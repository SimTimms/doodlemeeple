export default function kickstarterMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'kickstarters',
      link: () =>
        setPageValues({ ...pageValues, secondaryPage: 'kickstarters' }),
      count: null,
    },
    {
      name: 'My Kickstarters',
      icon: 'dynamic_feed',
      machineName: 'my_kickstarters',
      link: () =>
        setPageValues({ ...pageValues, secondaryPage: 'my_kickstarters' }),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_kickstarter',
      link: () =>
        setPageValues({ ...pageValues, secondaryPage: 'create_kickstarter' }),
      count: null,
    },
  ];
}
