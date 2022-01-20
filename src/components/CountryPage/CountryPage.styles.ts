import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'tpBtn'
    'flag'
    'text';

  row-gap: 3.5rem;
  padding: 3rem 1.25rem;

  @media (min-width: 50em) {
    padding: 3rem 3.125rem;
    grid-template-areas:
      'tpBtn .'
      'flag text';
    grid-template-columns: 1fr 1fr;
    column-gap: 3.5rem;
  }

  @media (min-width: 75em) {
    padding: 3rem 5rem;
    column-gap: 8.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  grid-area: flag;
`;

export const ContentWrapper = styled.div`
  grid-area: text;
  @media (min-width: 75em) {
    display: grid;
    grid-template-rows: 4.875rem;
    grid-auto-rows: min-content;
    grid-template-areas:
      'Heading .'
      'p1 p2'
      'links links';
  }
`;

export const ParagraphWrapper = styled.div`
  margin-bottom: 4rem;
  @media (min-width: 50em) {
    margin-bottom: 2.5rem;
  }
  @media (min-width: 75em) {
    &:nth-child(2) {
      grid-area: p1;
    }
    &:nth-child(3) {
      grid-area: p2;
    }
  }
`;

export const LinkWrapper = styled.div`
  grid-area: links;

  @media (min-width: 50em) {
    display: flex;
    align-items: center;
    align-content: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  @media (min-width: 50em) {
    grid-template-columns: 1fr 1fr;
    max-width: 20rem;
  }
  @media (min-width: 75em) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 27.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5625rem;
  margin-bottom: 2.25rem;
  @media (min-width: 50em) {
    margin-bottom: 0rem;
    align-self: center;
  }
  @media (min-width: 75em) {
    font-size: 1.875rem;
    grid-area: Heading;
    display: inline-block;
  }
`;

export const LinkHeading = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
  font-weight: 300;
  @media (min-width: 50em) {
    white-space: nowrap;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 50em) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;
