import Cookies from 'js-cookie';

export default function menuArray(history, counts, profile) {
  return [
    {
      name: 'Projects',
      icon: 'casino',
      link: () => history.push('/app/projects'),
      count: { icon: 'star', count: counts.quotes },
    },
    {
      name: profile.creativeTrue ? 'Invites' : 'hide',
      icon: 'mail',
      link: () => history.push('/app/invites'),
      count: counts.invites > 0 && {
        icon: 'local_post_office',
        count: counts.invites,
      },
    },
    {
      name: 'Jobs',
      icon: 'work',
      link: () => history.push('/app/dashboard'),
      count: null,
    },

    {
      name: 'Community',
      icon: 'group_work',
      link: () => history.push('/app/community'),
      count: null,
    },
    {
      name: profile.creativeTrue || profile.creatorTrue ? 'Messages' : 'hide',
      icon: 'chat',
      link: () => history.push('/messages/conversations'),
      color: '',
      count:
        counts.messages > 0
          ? { icon: 'local_post_office', count: counts.messages }
          : { icon: 'mail', count: counts.messages },
    },
    {
      name: 'Account',
      icon: 'account_balance',
      link: () => history.push('/app/account'),
      count: null,
    },
    {
      name: 'Tasks',
      icon: 'task_alt',
      link: () => history.push('/app/tasks'),
      count: null,
    },
    {
      name: 'Logout',
      icon: 'exit_to_app',
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
