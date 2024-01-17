import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import NumbersContainer from './components/NumbersContainer';
import BonusCalculation from './components/BonusCalculation';
import BarContainer from './components/BarContainer';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.100.7/operaciones_GOD/public/indicadores/chivito', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <AppDiv>
      {data && (
        <>
          <NumbersContainer
            datos={data.numbers}
            datosCompare={data.idealCategory}
          />
          <BarContainer title='Nivel que debería tener' datos={data.idealCategory} />
          <BarContainer title='Nivel que tiene' datos={data.actualCategory} />
          <BonusCalculation numbers={data.numbers} actualCategory={data.actualCategory} />
        </>
      )}
    </AppDiv>
  );
};

export default App;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  padding-bottom: 64px;
  width: 100%;
`;