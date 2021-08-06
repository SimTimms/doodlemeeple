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
      name: 'Job Details',
      icon: 'list_alt',
      machineName: 'job_details',
      link: () =>
        onClickEvent({
          ...pageValues,
          secondaryPage: 'job_details',
        }),
      count: null,
    },
  ];
}
