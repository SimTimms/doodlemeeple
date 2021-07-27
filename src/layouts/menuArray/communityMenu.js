export default function communityMenu(history, counts, onClickEvent) {
  return [
    {
      name: 'Dashboard',
      icon: 'face',
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
