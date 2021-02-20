export default function preferencesSet(profile) {
  return profile.creatorTrue || profile.creativeTrue ? true : false;
}
