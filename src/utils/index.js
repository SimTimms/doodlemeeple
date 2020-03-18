export const TYPE_HELPER = typeIn => {
  switch (typeIn) {
    case 'graphic-artist':
      return 'Graphic Artist';
    case '3d-artist':
      return '3d Sculptor';
    case 'rulebook-editor':
      return 'Rulebook Editor';
    default:
      return ' Artist';
  }
};
