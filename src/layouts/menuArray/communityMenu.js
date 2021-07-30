export default function communityMenu(onClickEvent) {
  return [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      machineName: 'dashboard',
      link: () => onClickEvent('dashboard'),
      count: null,
    },
    {
      name: 'Profiles',
      icon: 'face',
      machineName: 'profiles',
      link: () => onClickEvent('profiles'),
      count: null,
    },
    {
      name: 'Blog',
      icon: 'blog',
      machineName: 'blog',
      link: () => onClickEvent('blog'),
      count: null,
    },
  ];
}
