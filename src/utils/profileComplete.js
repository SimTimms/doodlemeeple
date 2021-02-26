export default function profileComplete(profile) {
  return profile.summary &&
    profile.profileImg &&
    profile.profileBG &&
    profile.sections.length > 0
    ? true
    : false;
}
