export const readableErrors = (errorIn, errors) => {
  let errorString = errorIn.toString();

  if (
    errorString.indexOf('A unique constraint would be violated on User') > -1
  ) {
    errors.email = 'This user already exists';
  } else {
    errors.email = null;
  }
  if (errorString.indexOf('Password Fail') > -1) {
    errors.password = 'This password is not secure';
  } else {
    errors.password = null;
  }
  return Object.assign({}, errors);
};
