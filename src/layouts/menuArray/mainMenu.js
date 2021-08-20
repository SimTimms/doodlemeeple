import Cookies from 'js-cookie';

export default function mainMenu(history, counts) {
  return [
    {
      name: 'Home',
      icon: 'home',
      machineName: 'home',
      link: () => history.push('/app/home'),
      count: null,
    },
    {
      name: 'Notifications',
      icon: 'notifications',
      machineName: 'tasks',
      link: () => history.push('/app/tasks'),
      count: null,
    },
    {
      name: 'Job Ads',
      icon: 'post_add',
      machineName: 'jobs',
      link: () => history.push('/app/jobs'),
      count: { icon: 'star', count: counts.jobAds },
    },
    {
      name: 'Work',
      icon: 'work',
      machineName: 'work',
      link: () => history.push('/app/work'),
      count: { icon: 'star', count: counts.work },
    },
    {
      name: 'Messages',
      icon: 'chat',
      machineName: 'messages',
      link: () => history.push('/app/messages'),
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
