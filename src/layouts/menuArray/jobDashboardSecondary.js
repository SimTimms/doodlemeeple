export default function jobDashboardSecondary(pageValues, onClickEvent) {
  return [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      machineName: 'job_dashboard',
      link: () =>
        onClickEvent({ ...pageValues, secondaryPage: 'job_dashboard' }),
      count: null,
    },
    {
      name: 'Description',
      icon: 'list_alt',
      machineName: 'job_details',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'job_details',
        }),
      count: null,
    },
    {
      name: 'Edit',
      icon: 'edit',
      machineName: 'edit_job',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'edit_job',
        }),
      count: null,
    },
  ];
}
