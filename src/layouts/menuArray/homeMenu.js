export default function homeMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Community',
      icon: 'home',
      machineName: 'community',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'community',
          secondaryPage: 'dashboard',
        }),
      count: null,
    },
    {
      name: 'Games',
      icon: 'casino',
      machineName: 'games',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'games',
          secondaryPage: 'games',
        }),
      count: null,
    },
    {
      name: 'Kickstarters',
      icon: 'view_in_ar',
      machineName: 'kickstarters',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'kickstarters',
          secondaryPage: 'kickstarters',
        }),
      count: null,
    },
  ];
}
