export default function communityMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      machineName: 'dashboard',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'dashboard',
        }),
      count: null,
    },
    {
      name: 'Profiles',
      icon: 'face',
      machineName: 'profiles',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'profiles',
        }),
      count: null,
    },
    /*{
      name: 'Blog',
      icon: 'blog',
      machineName: 'blog',
      link: () => onClickEvent('blog'),
      count: null,
    },*/
  ];
}
