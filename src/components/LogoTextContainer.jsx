import React from 'react';
import { styled } from 'styled-components';

const LogoTextContainer = ({ title, text, icon, color }) => {
  return (
    <PrincipalContainer $color={color}>
      {icon}
      <Titulo>{title}</Titulo>
      <p>{text}</p>
    </PrincipalContainer>
  );
};

export default LogoTextContainer;

const PrincipalContainer = styled.div`
  align-items: center;
  ${({ $color }) => $color === false && 'color: #E61300;'};
  ${({ $color }) => $color === true && 'color: #008000;'};
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const Titulo = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
