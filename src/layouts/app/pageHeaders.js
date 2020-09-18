export default function pageHeaders(inStr) {
  switch (inStr) {
    case 'edit-profile':
      return 'Profile';
    case 'invites':
      return 'Invites';
    default:
      return 'Dashboard';
  }
}
