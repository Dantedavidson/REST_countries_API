import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../App';

import * as S from './Toggler.styles';

export default function Toggler() {
  return (
    <ThemeContext.Consumer>
      {({}) => (
        <S.Container>
          <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </S.Container>
      )}
    </ThemeContext.Consumer>
  );
}
