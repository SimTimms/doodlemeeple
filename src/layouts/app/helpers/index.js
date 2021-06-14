export const pathParam = (props) => {
  return props
    ? props.match
      ? props.match.params
        ? props.match.params
        : null
      : null
    : null;
};
