import React from 'react';
import Toggler from '../Toggler/Toggler';
import * as S from './Header.styles';

export default function Header() {
  return (
    <S.Container>
      <S.Logo>Where in the world?</S.Logo>
      <Toggler />
    </S.Container>
  );
}
