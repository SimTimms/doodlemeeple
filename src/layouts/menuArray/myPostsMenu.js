export default function myPostsMenu(pageValues, setPageValues) {
  return [
    {
      name: 'My Posts',
      icon: 'dynamic_feed',
      machineName: 'my_posts',
      link: () =>
        setPageValues({
          ...pageValues,
          secondaryPage: 'my_posts',
          postId: null,
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
