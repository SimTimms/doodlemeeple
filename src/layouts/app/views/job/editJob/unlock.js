const minLengths = { name: 10, genre: 3, summary: 30, creativeSummary: 20 };
export function unlock(job) {
  return job.name.length < minLengths.name
    ? `Provide a Title with ${
        minLengths.name - job.name.length
      } more characters to continue`
    : job.genre.length < minLengths.genre
    ? `Provide some genre or style guidance with ${
        minLengths.genre - job.genre.length
      } more characters to continue`
    : job.summary.length < minLengths.summary
    ? `Provide a summary with ${
        minLengths.summary - job.summary.length
      } more characters to continue`
    : job.creativeSummary.length < minLengths.creativeSummary
    ? `Provide a Contractor Summary with ${
        minLengths.creativeSummary - job.creativeSummary.length
      } more characters to continue`
    : job.keywords.length === 0
    ? `Choose at least 1 keyword to continue`
    : null;
}

export function checkLength(strIn, field) {
  return strIn.length >= minLengths[field];
}
