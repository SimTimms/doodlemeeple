export const errorMessages = (messageIn) => {
  if (messageIn.indexOf('would violate the required relation ') > -1) {
    return 'This game cannot be deleted while there are open jobs attached';
  }
  return '';
};

export const readableErrors = (errorIn, errors) => {
  let errorString = errorIn.toString();

  if (errorString.indexOf('A unique constraint') > -1) {
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
  if (errorString.indexOf('Invalid password') > -1) {
    errors.passwordError = "That's not right";
  } else {
    errors.passwordError = null;
  }

  return Object.assign({}, errors);
};

export const friendlyGraphQLError = (errorIn) => {
  let errorString = errorIn.toString();
  console.log(errorString);
  return errorString.indexOf('authorization code has already been used') > -1
    ? 'This code has expired'
    : errorString.indexOf('Authorization code expired') > -1
    ? 'This code has expired'
    : `Error: ${errorString}`;
};
