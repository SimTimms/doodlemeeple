import Cookies from 'js-cookie';

export default function menuArray(history, counts, profile) {
  return [
    {
      name: 'Projects',
      icon: 'work',
      machineName: 'projects',
      link: () => history.push('/app/projects'),
      count: { icon: 'star', count: counts.quotes },
    },
    {
      name: 'Invites',
      icon: 'mail',
      machineName: 'invites',
      link: () => history.push('/app/invites'),
      count: counts.invites > 0 && {
        icon: 'local_post_office',
        count: counts.invites,
      },
    },
    {
      name: 'Community',
      icon: 'group_work',
      machineName: 'community',
      link: () => history.push('/app/community'),
      count: null,
    },
    {
      name: 'Kickstarter',
      icon: 'group_work',
      machineName: 'kickstarter',
      link: () => history.push('/app/kickstarter'),
      count: null,
    },
    {
      name: profile.creativeTrue || profile.creatorTrue ? 'Messages' : 'hide',
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
      icon: 'account_balance',
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
