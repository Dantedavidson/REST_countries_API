import React, { useState, useEffect } from 'react';
import * as S from './Input.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
type Props = {
  countries: any[] | null;
  handler: (value: string, array: any[] | null) => void;
};
export default function Input({ countries, handler }: Props) {
  const [value, setValue] = useState('');
  useEffect(() => {
    handler(value, countries);
  }, [value, countries]);
  return (
    <S.InputContainer>
      {' '}
      <FontAwesomeIcon icon={faSearch} />
      <S.Input
        placeholder='Search for a country'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </S.InputContainer>
  );
}
