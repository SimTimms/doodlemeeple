export default function menuButton(history) {
  return {
    name: 'Jobs',
    icon: 'work',
    machineName: 'jobs',
    link: () => history.push('/job/dashboard'),
    count: 0,
  };
}
