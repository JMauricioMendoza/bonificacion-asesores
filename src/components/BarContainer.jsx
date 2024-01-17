import React from 'react';
import { styled } from 'styled-components';
import BarProgress from './BarProgress';
import InfoContainer from './InfoContainer';

const BarContainer = ({ title, datos }) => {
  const {
    category,
    months,
    wallet,
    vigentClients,
    moraPerCent,
    moraInThousands,
    overdue
  } = datos;

  return (
    <PrincipalContainer>
      <TextsContainer>
        <Title>{title}:</Title>
        <p>{category}</p>
        <p>{months} meses</p>
      </TextsContainer>
      <BarProgress seniority={months} />
      <InfoContainer
        wallet={wallet}
        vigentClients={vigentClients}
        moraPerCent={moraPerCent}
        moraInThousands={moraInThousands}
        overdue={overdue}
      />
    </PrincipalContainer>
  );
};

export default BarContainer;

const PrincipalContainer = styled.div`
  border: 1px solid #CCCCCC;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 8px;
  padding: 16px;
`;

const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.p`
  color: #444444;
  font-size: 16px;
  font-weight: 600;
`;