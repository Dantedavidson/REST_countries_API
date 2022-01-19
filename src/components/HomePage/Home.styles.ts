import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.25rem 1.875rem;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  div:nth-child(1) {
    margin-bottom: 1rem;
  }

  @media (min-width: 75em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CountryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  row-gap: 3rem;

  @media (min-width: 50em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 75em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 87em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
