import React from 'react';
import styled from 'styled-components';

const BonusCalculation = ({ numbers, actualCategory }) => {
  let lateClientDiscountAmount = numbers.Mora * 100 / numbers.CarteraTotal > actualCategory.moraPerCent ? 30 : 15;
  let overdueClientDiscountAmount = 0;
  
  const overduePercent = numbers.Vencido * 100 / numbers.CarteraTotal;

  if (overduePercent >= 10) overdueClientDiscountAmount = 75;
  else if (overduePercent >= 5) overdueClientDiscountAmount = 35;
  else if (overduePercent >= 3) overdueClientDiscountAmount = 30;
  else if (overduePercent >= 1.5) overdueClientDiscountAmount = 22.5;

  const currentClientBonus = numbers.ClienteVigente * 15;
  const lateClientDiscount = 0 - (numbers.ClienteMora * lateClientDiscountAmount);
  const overdueClientDiscount = 0 - (numbers.ClienteVencido * overdueClientDiscountAmount);
  const totalBonus = currentClientBonus + lateClientDiscount + overdueClientDiscount;
  
  return (
    <PrincipalContainer>
      <Title>Bonificación actual:</Title>
      <NumbersContainer>
        <p>Clientes vigentes:</p>
        <Numbers $green={currentClientBonus > 0}>$ {currentClientBonus.toFixed(2)}</Numbers>
      </NumbersContainer>
      <NumbersContainer>
        <p>Clientes en mora:</p>
        <Numbers $red={lateClientDiscount < 0}>$ {lateClientDiscount.toFixed(2)}</Numbers> 
      </NumbersContainer>
      <NumbersContainer $line>
        <p>Clientes vencidos:</p>
        <Numbers $red={overdueClientDiscount < 0}>$ {overdueClientDiscount.toFixed(2)}</Numbers>
      </NumbersContainer>
      <NumbersContainer>
        <p>Total:</p>
        <Numbers
          $green={totalBonus > 0}
          $red={totalBonus < 0}>
            $ {totalBonus.toFixed(2)}
        </Numbers>
      </NumbersContainer>
    </PrincipalContainer>
  );
};

export default BonusCalculation;

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

const Title = styled.p`
  color: #444444;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 8px;
`;

const NumbersContainer = styled.div`
  ${({ $line }) => $line && 'border-bottom: 2px solid #000;'}
  display: flex;
  justify-content: space-between;
  ${({ $line }) => $line && 'padding-bottom: 8px;'}
  width: 230px;
`;

const Numbers = styled.p`
  ${({ $green }) => $green && 'color: green;'}
  ${({ $red }) => $red && 'color: hsl(5, 100%, 45%);'}
  font-weight: 600;
`;