export default function workMenuSecondary(pageValues, onClickEvent) {
  return [
    {
      name: 'Quotes',
      icon: 'local_activity',
      machineName: 'quotes',
      link: () => onClickEvent({ ...pageValues, secondaryPage: 'quotes' }),
      count: null,
    },
    {
      name: 'Active Work',
      icon: 'local_activity',
      machineName: 'active_work',
      link: () => onClickEvent({ ...pageValues, secondaryPage: 'active_work' }),
      count: null,
    },
    {
      name: 'Edit Quote',
      icon: 'work',
      machineName: 'edit_quote',
      link: () => onClickEvent({ ...pageValues, secondaryPage: 'edit_quote' }),
    },
  ];
}
