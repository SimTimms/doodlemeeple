export default function communityMenu(menu) {
  return [
    {
      name: 'Feed',
      icon: 'dashboard',
      machineName: 'dashboard',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            primaryPage: 'community',
            secondaryPage: 'dashboard',
          },
        }),
      count: null,
    },
    {
      name: 'Profiles',
      icon: 'face',
      machineName: 'profiles',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'profiles',
          },
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
