import logout from '../../utils/logout';

export default function profileMenu(onClickEvent, history) {
  return [
    {
      name: 'Profile',
      icon: 'face',
      machineName: 'profile',
      link: () => onClickEvent('profile'),
      count: null,
    },
    {
      name: 'Preview',
      icon: 'preview',
      machineName: 'preview',
      link: () => onClickEvent('preview'),
      count: null,
    },
    {
      name: 'Preferences',
      icon: 'settings',
      machineName: 'preferences',
      link: () => onClickEvent('preferences'),
      count: null,
    },
    {
      name: 'Account',
      icon: 'account_box',
      machineName: 'account',
      link: () => onClickEvent('account'),
      count: null,
    },
    {
      name: 'Logout',
      icon: 'logout',
      machineName: 'logout',
      link: () => logout(history),
      count: null,
    },
  ];
}
