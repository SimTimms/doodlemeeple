import Cookies from 'js-cookie';

export default function mainMenu(history, counts, onClickEvent) {
  return [
    {
      name: 'Home',
      icon: 'home',
      machineName: 'home',
      link: () => history.push('/app/home'),
      count: null,
      postsMenu: [
        {
          name: 'Community',
          icon: 'home',
          machineName: 'community',
          link: () => onClickEvent('community'),
          count: null,
        },
        {
          name: 'Games',
          icon: 'casino',
          machineName: 'games',
          link: () => onClickEvent('games'),
          count: null,
          gamesMenu: [
            {
              name: 'Browse',
              icon: 'casino',
              machineName: 'browse_games',
              link: () => onClickEvent(),
              count: 0,
            },
          ],
        },
        {
          name: 'Kickstarters',
          icon: 'view_in_ar',
          machineName: 'kickstarters',
          link: () => onClickEvent('kickstarters'),
          count: null,
        },
        {
          name: 'Events',
          icon: 'event',
          machineName: 'events',
          link: () => onClickEvent('events'),
          count: null,
        },
      ],
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      machineName: 'tasks',
      link: () => history.push('/app/tasks'),
      count: null,
    },
    {
      name: 'Work',
      icon: 'work',
      machineName: 'work',
      link: () => history.push('/app/work'),
      count: { icon: 'star', count: counts.quotes },
    },
    {
      name: 'Messages',
      icon: 'chat',
      machineName: 'messages',
      link: () => history.push('/app/conversations'),
      color: '',
      count:
        counts.messages > 0
          ? { icon: 'local_post_office', count: counts.messages }
          : { icon: 'mail', count: counts.messages },
    },
    {
      name: 'Account',
      icon: 'account_circle',
      machineName: 'account',
      link: () => history.push('/app/account'),
      count: null,
      subMenu: [
        {
          name: 'Profile',
          icon: 'face',
          machineName: 'edit-profile',
          link: () => history.push('/app/edit-profile'),
          count: null,
        },
        {
          name: 'Logout',
          icon: 'logout',
          machineName: 'logout',
          link: () => {
            Cookies.remove('token');
            Cookies.remove('userId');
            localStorage.removeItem('featureArticle');
            localStorage.removeItem('posts');
            history.replace(`/`);
          },
          count: null,
        },
      ],
    },
  ];
}
