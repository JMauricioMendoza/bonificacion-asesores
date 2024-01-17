import React from 'react';
import { styled } from 'styled-components';
import { FaLongArrowAltDown } from 'react-icons/fa';

const BarProgress = ({ seniority }) => {
  seniority = Math.min(36, Math.max(1, seniority || 1));

  const coloredDiv = Array.from({ length: 36 }, (_, index) => (
    <ColorDiv
      key={index}
      $bgcolor={(index + 1) * 5}
      $space={index + 1}
      $leftBorder={index === 0}
      $rightBorder={index === 35}
    />
  ));

  const uncoloredDiv = Array.from({ length: 36 }, (_, index) => (
    <ColorDiv key={index} $arrow={(index + 1) === seniority}>
      {(index + 1) === seniority && (<FaLongArrowAltDown/>)}
    </ColorDiv>
  ));

  return (
    <PrincipalContainer>
      {uncoloredDiv}
      {coloredDiv}
      {renderCategories()}
    </PrincipalContainer>
  );
};

const renderCategories = () => (
  <>
    {categories.map((category, index) => (
      <Category key={index} {...category}>
        <span>{category.label}</span>
      </Category>
    ))}
  </>
);

const categories = [
  { $aprendiz: true, label: 'Aprendiz' },
  { $bronce1: true, label: 'Bronce I' },
  { $bronce2: true, label: 'Bronce II' },
  { $plata1: true, label: 'Plata I' },
  { $plata2: true, label: 'Plata II' },
  { $oro1: true, label: 'Oro I' },
  { $oro2: true, label: 'Oro II' },
  { $diamante1: true, label: 'Diamante I' },
  { $diamante2: true, label: 'Diamante II' },
];

export default BarProgress;

const PrincipalContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(36, auto);
  grid-template-rows: repeat(3, auto);
  width: 1152px;
`;

const ColorDiv = styled.div`
  align-items: end;
  ${({ $bgcolor }) => $bgcolor && `background-color: hsl(${$bgcolor}, 100%, 45%);`}
  ${({ $leftBorder }) => $leftBorder && 'border-radius: 10px 0 0 10px;'}
  ${({ $rightBorder }) => $rightBorder && 'border-radius: 0 10px 10px 0;'}
  display: flex;
  ${({ $arrow }) => $arrow && 'font-size: 20px;'}
  ${({ $space }) => $space && `grid-area: 2 / ${$space} / 3 / ${$space + 1};`}
  height: 24px;
  justify-content: center;
  width: 32px;
`;

const Category = styled.div`
  align-items: center;
  border-left: 1px solid #FFFFFF;
  display: flex;
  ${({ $aprendiz }) => $aprendiz && 'grid-area: 2 / 1 / 3 / 4;'}
  ${({ $bronce1 }) => $bronce1 && 'grid-area: 2 / 4 / 3 / 8;'}
  ${({ $bronce2 }) => $bronce2 && 'grid-area: 2 / 8 / 3 / 12;'}
  ${({ $plata1 }) => $plata1 && 'grid-area: 2 / 12 / 3 / 16;'}
  ${({ $plata2 }) => $plata2 && 'grid-area: 2 / 16 / 3 / 20;'}
  ${({ $oro1 }) => $oro1 && 'grid-area: 2 / 20 / 3 / 24;'}
  ${({ $oro2 }) => $oro2 && 'grid-area: 2 / 24 / 3 / 28;'}
  ${({ $diamante1 }) => $diamante1 && 'grid-area: 2 / 28 / 3 / 32;'}
  ${({ $diamante2 }) => $diamante2 && 'grid-area: 2 / 32 / 3 / 37;'}
  height: 32px;
  justify-content: center;

  span {
    color: #000000;
    font-size: 12px;
    font-weight: 700;
  };
`;
