import React from 'react';
import { styled } from 'styled-components';
import LogoTextContainer from './LogoTextContainer';
import { FaWallet, FaPercent, FaMoneyBill } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

const InfoContainer = ({
  wallet,
  vigentClients,
  moraPerCent,
  moraInThousands,
  overdue,
  colorWallet,
  colorVigentClients,
  colorMoraPerCent,
  colorMoraInThousand,
  colorOverdue
}) => {
  const items = [
    { icon: <FaWallet />, title: '$ Cartera / Mil', text: wallet, color: colorWallet },
    { icon: <IoPersonSharp />, title: 'Vigentes', text: vigentClients, color: colorVigentClients },
    { icon: <FaPercent />, title: 'Mora', text: moraPerCent, color: colorMoraPerCent },
    { icon: <FaMoneyBill />, title: '$ Mora / Mil', text: moraInThousands, color: colorMoraInThousand },
    { icon: <FaPercent />, title: 'Vencido', text: overdue, color: colorOverdue }
  ];

  return <PrincipalContainer>{items.map(renderLogoTextContainer)}</PrincipalContainer>;
};

const renderLogoTextContainer = ({ icon, title, text, color }, index) => (
  <LogoTextContainer key={index} icon={icon} title={title} text={text} color={color} />
);

export default InfoContainer;

const PrincipalContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
`;
