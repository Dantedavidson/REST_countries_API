import React, { useEffect, useState } from 'react';
import * as S from './Home.styles';
import Input from '../Input/Input';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';
import { fetchAll } from '../../API/FetchData';
export default function Home() {
  const [countries, setCountries] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      let data = await fetchAll();
      console.log(data);
      setCountries(data);
    }
    getData();
  }, []);
  return (
    <S.Container>
      <S.SearchBar>
        <Input />
        <Filter />
      </S.SearchBar>
      <S.CountryGrid>
        {countries && countries.length > 0 ? (
          countries.map((country: any) => <CountryCard country={country} />)
        ) : (
          <h1>No Results Found</h1>
        )}
      </S.CountryGrid>
    </S.Container>
  );
}
