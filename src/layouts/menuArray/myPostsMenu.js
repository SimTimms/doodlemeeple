export default function myPostsMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'all_posts',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'all_posts',
          myPostId: null,
        }),
      count: null,
    },
    {
      name: 'My Posts',
      icon: 'dynamic_feed',
      machineName: 'my_posts',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'my_posts',
          myPostId: null,
        }),
      count: null,
    },
    {
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_my_post',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'create_my_post',
          myPostId: 'new',
        }),
      count: null,
    },
  ];
}
