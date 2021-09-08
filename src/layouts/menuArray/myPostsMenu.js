export default function myPostsMenu(menu) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'all_posts',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'all_posts',
            myPostId: null,
          },
        }),
      count: null,
    },
    {
      name: 'My Posts',
      icon: 'dynamic_feed',
      machineName: 'my_posts',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'my_posts',
            myPostId: null,
          },
        }),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_my_post',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'create_my_post',
            myPostId: 'new',
          },
        }),
      count: null,
    },
  ];
}
