import React from "react";
import * as S from "./CountryCard.styles";
type Props = {
  country: any;
};
export default function CountryCard({ country }: Props) {
  return (
    <S.Container>
      <S.Flag src={country.flags.png} />
      <S.TextWrapper>
        <S.Name>{country?.name?.official}</S.Name>
        <S.Field>
          <b>Population:</b> {country.population}
        </S.Field>
        <S.Field>
          <b>Region:</b> {country.region}
        </S.Field>
        <S.Field>
          <b>Capitol</b> {country.capital}
        </S.Field>
      </S.TextWrapper>
    </S.Container>
  );
}
