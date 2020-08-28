export const TYPE_HELPER = (typeIn) => {
  switch (typeIn) {
    case 'graphic-artist':
      return 'Graphic Artist';
    case '3d-artist':
      return '3d Sculptor';
    case 'rulebook-editor':
      return 'Editor';
    case 'artist':
      return 'Artist';
    default:
      return typeIn;
  }
};

export function calculatePercent(paymentTermsArray) {
  let response = {
    status: false,
    sum: 0,
    message: '',
  };
  let percentSum = 0;

  for (let i = 0; i < paymentTermsArray.length; i++) {
    let numberVal = paymentTermsArray[i].percent;
    percentSum += parseInt(numberVal === '' ? 0 : numberVal);
  }

  response =
    percentSum > 100
      ? {
          status: true,
          sum: 100 - percentSum,
          message:
            'Although it would be nice, your payment terms cannot exceed 100%',
        }
      : percentSum === 100
      ? {
          status: false,
          sum: 100 - percentSum,
          message: '',
        }
      : percentSum < 100 && {
          status: false,
          sum: 100 - percentSum,
          message: `Payment Term: The Creative shall receive the remaining ${
            100 - percentSum
          }%
upon completion of this contract.`,
        };
  return response;
}
