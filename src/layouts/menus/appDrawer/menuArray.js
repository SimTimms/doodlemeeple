import Cookies from 'js-cookie';

export default function menuArray(history, counts, profile) {
  return [
    {
      name: 'Work',
      icon: 'work',
      machineName: 'projects',
      link: () => history.push('/app/projects'),
      count: { icon: 'star', count: counts.quotes },
    },
    {
      name: 'Job Board',
      icon: 'grid_view',
      machineName: 'job-board',
      link: () => history.push('/app/job-board'),
      count: 0,
    },
    {
      name: 'Browse',
      icon: 'home',
      machineName: 'community',
      link: () => history.push('/app/community'),
      count: null,
    },
    {
      name: 'Professionals',
      icon: 'chevron_right',
      machineName: 'creative-roster',
      link: () => history.push('/app/creative-roster'),
      count: null,
    },
    {
      name: 'Kickstarters',
      icon: 'chevron_right',
      machineName: 'kickstarters',
      link: () => history.push('/app/kickstarters'),
      count: null,
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
    },
    {
      name: 'Tasks',
      icon: 'task_alt',
      machineName: 'tasks',
      link: () => history.push('/app/tasks'),
      count: null,
    },
    {
      name: 'Logout',
      icon: 'exit_to_app',
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
  ];
}
