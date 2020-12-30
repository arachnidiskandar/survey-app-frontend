import React from 'react';
// import styled from 'styled-components';

import * as S from '@shared/ContentContainer';

const Home: React.FC = () => {
  return (
    <div>
      <S.ContentContainer>
        <h1>Questionários Ativos</h1>
        <div></div>
      </S.ContentContainer>
      <div>
        <h1>Questionários Finalizados</h1>
      </div>
    </div>
  );
};

export default Home;
