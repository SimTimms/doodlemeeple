export default function workMenu(pageValues, onClickEvent) {
  return [
    {
      name: 'Invites',
      icon: 'local_activity',
      machineName: 'invites',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'invites' }),
      count: null,
    },
    {
      name: 'My Work',
      icon: 'work',
      machineName: 'my_work',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'my_work' }),
    },
    {
      name: 'History',
      icon: 'history',
      machineName: 'history',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'history' }),
    },
  ];
}
