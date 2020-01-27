import React from 'react';
import { StyledLink, StyledButton } from './styles';

export default function NavBarButton(props) {
  return (
    <StyledLink href={props.linkTo}>
      <StyledButton variant="contained" color="primary">
        {props.name}
      </StyledButton>
    </StyledLink>
  );
}
