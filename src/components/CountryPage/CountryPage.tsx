import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './CountryPage.styles';
import Button from '../Button/Button';
import { fetchSingle, fetchBorders } from '../../API/FetchData';

export default function CountryPage() {
  const params = useParams();
  const [country, setCountry] = useState<any>(null);

  useEffect(() => {
    console.log('I went off');
    async function getData() {
      const response = await fetchSingle(params.name);
      console.log(response);
      let currencies: string[] = [];
      for (const [key, value] of Object.entries(response.currencies)) {
        currencies.push(key as string);
      }
      let languages: string[] = [];
      for (const [key, value] of Object.entries(response.languages)) {
        languages.push(value as string);
      }

      setCountry({ ...response, languages, currencies });
    }
    getData();
    console.log('useEffect fin');
  }, []);
  return (
    <S.Container>
      <Button handler={() => console.log('back')}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10' }} />
        Back
      </Button>

      <S.Image src={country?.flags?.png} />

      <S.ContentWrapper>
        <S.Title>{country?.name?.common}</S.Title>

        <S.ParagraphWrapper>
          <S.Text>
            <b>Native Name:</b> {country?.name?.nativeName?.eng?.common}
          </S.Text>
          <S.Text>
            <b>Population:</b> {country?.population}
          </S.Text>
          <S.Text>
            <b>Region:</b> {country?.region}
          </S.Text>
          <S.Text>
            <b>Sub Region:</b> {country?.subregion}
          </S.Text>
          <S.Text>
            <b>Capital:</b> {country?.capital}
          </S.Text>
        </S.ParagraphWrapper>

        <S.ParagraphWrapper>
          {/* <S.Text>
            <b>Top Level Domain:</b> {country?.tld[0]}
          </S.Text> */}
          {/* <S.Text>
            <b>Currencies:</b>{' '}
            {country?.currencies.map((currency: any) => currency).join(', ')}
          </S.Text> */}
          {/* <S.Text>
            <b>Languages:</b>{' '}
            {country?.languages.map((language: string) => language).join(', ')}
          </S.Text> */}
        </S.ParagraphWrapper>

        {/* <S.LinkWrapper>
        <S.LinkHeading>Border Countries:</S.LinkHeading>
        <S.ButtonWrapper>
          {borders && borders.length > 0 ? (
            borders.map((border: any) => (
              <Button handler={() => console.log('meh')}>{border}</Button>
            ))
          ) : (
            <p>{country?.name} is not borderd by any other countries</p>
          )}
        </S.ButtonWrapper>
      </S.LinkWrapper> */}
      </S.ContentWrapper>
    </S.Container>
  );
}
