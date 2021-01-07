export default function pageHeaders(inStr) {
  switch (inStr) {
    case 'edit-profile':
      return 'Profile';
    case 'account':
      return 'Account';
    case 'view-job':
      return 'Job Dashboard';
    case 'edit-job':
      return 'Create a Brief';
    case 'invites':
      return 'My Jobs';
    default:
      return 'Dashboard';
  }
}
