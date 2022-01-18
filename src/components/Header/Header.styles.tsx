import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.25rem;
  background-color: ${(props) => props.theme.colors.elements};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  @media (min-width: 50em) {
    padding: 2.25rem 3.125rem;
  }

  @media (min-width: 75em) {
    padding: 1.875rem 5rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.0625rem;
  font-weight: 800;
  @media (min-width: 50em) {
    font-size: 1.28125rem;
  }
  @media (min-width: 75em) {
    font-size: 1.5rem;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
