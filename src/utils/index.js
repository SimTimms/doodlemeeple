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
    case 'creator':
      return 'Creator';
    default:
      return typeIn;
  }
};

export function calculatePercent(paymentTermsArray, contractTotal, currency) {
  const totalInt = parseInt(contractTotal);
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

  console.log(percentSum, totalInt);
  response =
    percentSum > totalInt
      ? {
          status: true,
          sum: totalInt - percentSum,
          message: `Although it would be nice, your payment terms cannot exceed your total cost of ${contractTotal} ${currency}`,
        }
      : percentSum === totalInt
      ? {
          status: false,
          sum: totalInt,
          message: `Perfect!`,
        }
      : percentSum <= totalInt && {
          status: false,
          sum: totalInt - percentSum,
          message: `Payment Term: The Creative shall receive the remaining ${
            totalInt - percentSum
          } ${currency}
upon completion of this contract.`,
        };
  return response;
}
