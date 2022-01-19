import styled from 'styled-components';

export const Button = styled.div`
  display: block;
  width: 8.125rem;
  padding: 0.875rem 1.875rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.elements};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  cursor: pointer;
`;
