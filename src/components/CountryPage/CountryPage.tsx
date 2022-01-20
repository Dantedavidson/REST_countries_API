import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as S from './CountryPage.styles';
import Button from '../Button/Button';
import { fetchSingle, fetchBorders } from '../../API/FetchData';
import Loader from '../Loader/Loader';

export default function CountryPage() {
  const params = useParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<any>(null);

  async function getData(name: string) {
    setLoading(true);
    try {
      const response = await fetchSingle(name);
      let currencies: string[] = [];
      if (response.currencies) {
        for (const [key, value] of Object.entries(response.currencies)) {
          currencies.push(key as string);
        }
      }
      let languages: string[] = [];
      if (response.languages) {
        for (const [key, value] of Object.entries(response.languages)) {
          languages.push(value as string);
        }
      }
      if (response.borders) {
        let borders = await fetchBorders(response.borders);
        setCountry({ ...response, languages, currencies, borders });
      } else {
        setCountry({ ...response, languages, currencies });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  const backHandler = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    getData(params.name as string);
  }, [params.name]);
  return (
    <S.Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Button handler={backHandler}>
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
              <S.Text>
                <b>Top Level Domain:</b> {country?.tld[0]}
              </S.Text>
              <S.Text>
                <b>Currencies:</b>{' '}
                {country?.currencies?.length > 0
                  ? country?.currencies
                      .map((currency: any) => currency)
                      .join(', ')
                  : ''}
              </S.Text>
              <S.Text>
                <b>Languages:</b>{' '}
                {country?.languages.length > 0
                  ? country?.languages
                      .map((language: string) => language)
                      .join(', ')
                  : ''}
              </S.Text>
            </S.ParagraphWrapper>

            <S.LinkWrapper>
              <S.LinkHeading>Border Countries:</S.LinkHeading>
              <S.ButtonWrapper>
                {country?.borders && country?.borders.length > 0 ? (
                  country.borders.map((border: any) => (
                    <Button
                      handler={() =>
                        navigate(`/country/${border}`, { replace: true })
                      }
                    >
                      {border}
                    </Button>
                  ))
                ) : (
                  <p>
                    {country?.name?.common} is not borderd by any other
                    countries
                  </p>
                )}
              </S.ButtonWrapper>
            </S.LinkWrapper>
          </S.ContentWrapper>
        </>
      )}
    </S.Container>
  );
}
