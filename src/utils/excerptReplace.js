export function excerptReplace(input) {
  const regex = /(<([^>]+)>)/gi;

  return input
    .replace(regex, '')
    .replace(/&#8217;/gi, "'")
    .replace(/&#8216;/gi, "'")
    .replace(/&amp;/gi, '&')
    .replace(/&#038;/gi, '&')
    .replace(/&#8221;/gi, '"')
    .replace(/&#8220;/gi, '"')
    .replace(/\[&hellip;\]/gi, '...');
}
