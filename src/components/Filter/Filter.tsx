import React from "react";
import * as S from "./Filter.styles";
export default function Filter() {
  return (
    <S.FilterContainer aria-label="Filter by Region">
      <S.Select name="region" id="region">
        <S.Option value="" selected disabled hidden>
          Filter by Region
        </S.Option>
        <S.Option value="Africa">Africa</S.Option>
        <S.Option value="America">America</S.Option>
        <S.Option value="Asia">Asia</S.Option>
        <S.Option value="Europe">Europe</S.Option>
        <S.Option value="Oceania">Oceania</S.Option>
      </S.Select>
    </S.FilterContainer>
  );
}
