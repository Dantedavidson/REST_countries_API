import React from "react";
import * as S from "./Home.styles";
import Input from "../Input/Input";
import Filter from "../Filter/Filter";
import CountryCard from "../CountryCard/CountryCard";
import { useFetchAll } from "../../hooks/useFetchAll";
export default function Home() {
  const countries = useFetchAll();
  return (
    <div>
      <S.SearchBar>
        <Input />
        <Filter />
      </S.SearchBar>
      <div>
        {countries && countries.data.length > 0 ? (
          countries.data.map((country: any) => (
            <CountryCard country={country} />
          ))
        ) : (
          <h1>No Results Found</h1>
        )}
      </div>
    </div>
  );
}
