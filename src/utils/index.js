export const TYPE_HELPER = (typeIn) => {
  switch (typeIn) {
    case 'graphic-artist':
      return 'Graphic Artist';
    case '3d-artist':
      return '3d Sculptor';
    case 'rulebook-editor':
      return 'Rules Editor';
    case 'artist':
      return 'Artist';
    case 'creator':
      return 'Creator';
    case 'reviewer':
      return 'Reviewer';
    case 'marketing':
      return 'Marketing';
    case 'games-developer':
      return 'Games Developer';
    case 'voice-actor':
      return 'Voice Actor';
    case 'video-editor':
      return 'Video Editor';
    case 'social':
      return 'Social Media/Campaign Manager';
    case 'proof-reader':
      return 'Proof-Reader';
    case 'translator':
      return 'Translator';
    case 'world-builder':
      return 'World Builder/Creative Writer';
    case 'play-tester':
      return 'Play Tester';
    default:
      return typeIn;
  }
};

export const ARTIST_TYPES = [
  'graphic-artist',
  '3d-artist',
  'artist',
  'world-builder',
];
export const MARKETING_TYPES = [
  'reviewer',
  'marketing',
  'voice-actor',
  'video-editor',
  'social',
];
export const DEVELOPMENT_TYPES = [
  'rulebook-editor',
  'games-developer',
  'proof-reader',
  'translator',
  'play-tester',
  ,
];
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
