export default function workDashboardSecondary(menu) {
  return [
    {
      name: 'Dashboard',
      icon: 'local_activity',
      machineName: 'work_dashboard_home',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            secondaryPage: 'work_dashboard_home',
          },
        }),
      count: null,
    },
    {
      name: 'Details',
      icon: 'local_activity',
      machineName: 'work_description',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            secondaryPage: 'work_description',
          },
        }),
      count: null,
    },
    {
      name: 'Contract',
      icon: 'local_activity',
      machineName: 'work_contract',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          workPage: {
            ...menu.workPage,
            secondaryPage: 'work_contract',
          },
        }),
      count: null,
    },
  ];
}
