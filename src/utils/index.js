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
