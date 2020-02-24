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
  if (errorString.indexOf('Not authenticated') > -1) {
    errors.testError = "You don't have permission";
  } else {
    errors.testError = null;
  }
  if (errorString.indexOf('No such user') > -1) {
    errors.noUserError = "That's not right";
  } else {
    errors.noUserError = null;
  }
  return Object.assign({}, errors);
};
