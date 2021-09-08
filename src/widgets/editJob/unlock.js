const minLengths = { name: 10, genre: 3, summary: 30, creativeSummary: 20 };
export function unlock(job) {
  const jobDetails = job;
  if (!job.name) jobDetails.name = '';
  if (!job.genre) jobDetails.genre = '';
  if (!job.summary) jobDetails.summary = '';
  if (!job.creativeSummary) jobDetails.creativeSummary = '';
  if (!job.keywords) jobDetails.keywords = [];

  return jobDetails.name.length < minLengths.name
    ? `Provide a Title with ${
        minLengths.name - jobDetails.name.length
      } more characters to continue`
    : jobDetails.genre.length < minLengths.genre
    ? `Provide some genre or style guidance with ${
        minLengths.genre - jobDetails.genre.length
      } more characters to continue`
    : jobDetails.summary.length < minLengths.summary
    ? `Provide a summary with ${
        minLengths.summary - jobDetails.summary.length
      } more characters to continue`
    : jobDetails.creativeSummary.length < minLengths.creativeSummary
    ? `Provide a Creative Summary with ${
        minLengths.creativeSummary - jobDetails.creativeSummary.length
      } more characters to continue`
    : jobDetails.keywords.length === 0
    ? `Choose at least 1 keyword to continue`
    : null;
}

export function checkLength(strIn, field) {
  if (!strIn) return false;
  return strIn.length >= minLengths[field];
}
