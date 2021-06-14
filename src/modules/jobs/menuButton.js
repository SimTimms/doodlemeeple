export default function menuButton(history) {
  return {
    name: 'Job Board',
    icon: 'work',
    machineName: 'job-board',
    link: () => history.push('/job/job-board'),
    count: 0,
  };
}
