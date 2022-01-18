import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.875rem;

  div:nth-child(1) {
    margin-bottom: 1rem;
  }

  @media (min-width: 75em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
