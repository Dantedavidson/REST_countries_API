import styled from 'styled-components';

export const Container = styled.div`
  width: 20.375rem;
  background-color: ${props => props.theme.colors.elements};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  cursor: pointer;
  transition: transform ease 0.2s;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Flag = styled.img`
  width: 100%;
  height: 12.25rem;
  margin-bottom: 2.25rem;
`;

export const TextWrapper = styled.div`
  padding: 0 1.875rem 3.625rem 1.875rem;
`;
export const Name = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 1.875rem;
`;

export const Field = styled.p`
  font-size: 1rem;
`;
