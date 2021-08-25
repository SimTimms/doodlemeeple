export default function jobBoardMenu(pageValues, setPageValues) {
  return [
    {
      name: 'Back',
      icon: 'chevron_left',
      machineName: 'back',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'job_board',
          secondaryPage: null,
          jobId: null,
        }),
      count: null,
    },
    {
      name: 'Viewing Job',
      icon: 'work',
      machineName: 'viewing_job',
      link: () =>
        setPageValues({
          ...pageValues,
          primaryPage: 'job_board',
          secondaryPage: 'viewing_job',
        }),
      count: null,
    },
  ];
}
