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
      name: 'Skills',
      icon: 'face',
      machineName: 'skills',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'skills',
          secondaryPage: null,
        }),
      count: null,
    },
  ];
}
