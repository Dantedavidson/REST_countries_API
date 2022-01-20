import styled from 'styled-components';

export const FilterContainer = styled.div``;

export const Label = styled.label``;

export const Select = styled.select`
  color: lightgrey;
  background-color: ${props => props.theme.colors.elements};
  padding: 1.375rem 1.875rem;
  border-radius: 0.5rem;
  border: none;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  &:focus {
    outline-width: 0;
  }
  cursor: pointer;
`;

export const Option = styled.option`
  margin-bottom: 1.25rem;
  padding: 0.625rem 0;
`;
