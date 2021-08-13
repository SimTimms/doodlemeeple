export default function workMenu(pageValues, onClickEvent) {
  return [
    {
      name: 'Invites',
      icon: 'local_activity',
      machineName: 'invites',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'invites',
          secondaryPage: 'invite_list',
        }),
      count: null,
    },
    {
      name: 'Quotes',
      icon: 'local_activity',
      machineName: 'quotes',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'quotes',
          secondaryPage: 'quote_list',
        }),
      count: null,
    },
    {
      name: 'My Work',
      icon: 'work',
      machineName: 'my_work',
      link: () =>
        onClickEvent({
          ...pageValues,
          primaryPage: 'my_work',
          secondaryPage: 'quotes',
        }),
    },
    {
      name: 'History',
      icon: 'history',
      machineName: 'history',
      link: () => onClickEvent({ ...pageValues, primaryPage: 'history' }),
    },
  ];
}
