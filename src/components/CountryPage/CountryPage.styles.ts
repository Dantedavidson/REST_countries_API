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
  }

  @media (min-width: 75em) {
    padding: 3rem 5rem;
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
    grid-auto-rows: min-content;
    grid-template-areas:
      'Heading .'
      'p1 p2'
      'links links';
  }
`;

export const ParagraphWrapper = styled.div`
  margin-bottom: 4rem;

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
`;

export const ButtonWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 1.5625rem;
  margin-bottom: 2.25rem;
  @media (min-width: 75em) {
    font-size: 1.875rem;
    grid-area: Heading;
    display: inline-block;
  }
`;

export const LinkHeading = styled.h2`
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;
