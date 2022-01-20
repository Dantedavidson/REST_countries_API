import React, { useState, useEffect } from 'react';
import * as S from './Filter.styles';

type Props = {
  countries: any[] | null;
  handler: (value: string, array: any[] | null) => void;
};
export default function Filter({ handler, countries }: Props) {
  const [option, setOption] = useState('');

  useEffect(() => {
    handler(option, countries);
  }, [option, countries]);
  return (
    <S.FilterContainer aria-label='Filter by Region'>
      <S.Select
        name='region'
        id='region'
        onChange={e => setOption(e.target.value)}
      >
        <S.Option value='' selected={'' === option} disabled hidden>
          Filter by Region
        </S.Option>
        <S.Option value='All' selected={'All' === option}>
          All
        </S.Option>
        <S.Option value='Africa' selected={'Africa' === option}>
          Africa
        </S.Option>
        <S.Option value='Americas' selected={'Americas' === option}>
          Americas
        </S.Option>
        <S.Option value='Asia' selected={'Asia' === option}>
          Asia
        </S.Option>
        <S.Option value='Europe' selected={'Europe' === option}>
          Europe
        </S.Option>
        <S.Option value='Oceania' selected={'Oceania' === option}>
          Oceania
        </S.Option>
      </S.Select>
    </S.FilterContainer>
  );
}
