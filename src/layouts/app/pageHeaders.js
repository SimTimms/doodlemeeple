export default function pageHeaders(inStr) {
  switch (inStr) {
    case 'edit-profile':
      return 'Profile';
    case 'invites':
      return 'Invites';
    case 'account':
      return 'Account';
    default:
      return 'Dashboard';
  }
}
