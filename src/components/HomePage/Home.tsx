import React, { useEffect, useState } from 'react';
import * as S from './Home.styles';

import Input from '../Input/Input';
import Filter from '../Filter/Filter';
import CountryCard from '../CountryCard/CountryCard';
import Loader from '../Loader/Loader';
import { fetchAll } from '../../API/FetchData';
export default function Home() {
  const [countries, setCountries] = useState<any>(null);
  const [filtered, setFiltered] = useState<any>(null);
  const [region, setRegion] = useState<any>(null);

  const handleInput = (value: string, array: any[] | null) => {
    if (!value || !array) return setFiltered(countries);
    let results = array.filter((country: any) => {
      return country?.name?.common.toLowerCase().includes(value.toLowerCase());
    });
    setFiltered(results);
  };
  const handleSelect = (value: string, array: any[] | null) => {
    if (!value || value === 'All' || !array) return setRegion(filtered);
    let results = array.filter((country: any) => {
      return country.region.toLowerCase() === value.toLowerCase();
    });
    setRegion(results);
  };
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
        <Input countries={countries} handler={handleInput} />
        <Filter countries={filtered} handler={handleSelect} />
      </S.SearchBar>
      <S.CountryGrid>
        {region && region.length > 0 ? (
          region.map((country: any) => (
            <CountryCard key={country.name.common} country={country} />
          ))
        ) : (
          <Loader />
        )}
      </S.CountryGrid>
    </S.Container>
  );
}
