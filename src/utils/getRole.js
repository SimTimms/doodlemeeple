export default function getRole(profile) {
  return profile.creativeTrue && profile.creatorTrue
    ? 'both'
    : profile.creativeTrue
    ? 'creative'
    : profile.creatorTrue
    ? 'creator'
    : 'none';
}
