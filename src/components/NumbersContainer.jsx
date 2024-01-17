import React from 'react';
import { styled } from 'styled-components';
import InfoContainer from './InfoContainer';

const NumbersContainer = ({ datos, datosCompare }) => {
  const wallet = (datos.CarteraTotal / 1000).toFixed(0);
  const vigentClients = datos.ClienteVigente;
  const moraPerCent = (datos.Mora * 100 / datos.CarteraTotal).toFixed(2);
  const moraInThousands = (datos.Mora / 1000).toFixed(0);
  const overdue = (datos.Vencido * 100 / datos.CarteraTotal).toFixed(2);

  return (
    <PrincipalContainer>
      <Title>Sus números:</Title>
      <InfoContainer
        wallet={wallet}
        vigentClients={vigentClients}
        moraPerCent={moraPerCent}
        moraInThousands={moraInThousands}
        overdue={overdue}
        colorWallet={wallet >= datosCompare.wallet}
        colorVigentClients={vigentClients >= datosCompare.vigentClients}
        colorMoraPerCent={moraPerCent <= datosCompare.moraPerCent}
        colorMoraInThousand={moraInThousands <= datosCompare.moraInThousands}
        colorOverdue={overdue <= datosCompare.overdue}
      />
    </PrincipalContainer>
  );
};

export default NumbersContainer;

const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 16px;
  padding: 16px;
`;

const Title = styled.p`
  color: #444444;
  font-size: 16px;
  font-weight: 600;
`;