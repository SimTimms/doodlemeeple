export default function workDashboardSecondary(pageValues, onClickEvent) {
  return [
    {
      name: 'Dashboard',
      icon: 'local_activity',
      machineName: 'work_dashboard_home',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'work_dashboard_home',
        }),
      count: null,
    },
    {
      name: 'Details',
      icon: 'local_activity',
      machineName: 'work_description',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'work_description',
        }),
      count: null,
    },
    {
      name: 'Contract',
      icon: 'local_activity',
      machineName: 'work_contract',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'work_contract',
        }),
      count: null,
    },
  ];
}
