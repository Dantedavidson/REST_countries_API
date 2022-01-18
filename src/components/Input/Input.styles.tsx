import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  padding: 1.25rem 2.5rem;
  background-color: ${(props) => props.theme.colors.elements};
  color: lightgrey;
  border-radius: 5px;
  font-size: 0.875rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;
export const Input = styled.input`
  border: none;
  background-color: inherit;
  color: inherit;
  margin-left: 0.5rem;
  flex-grow: 1;
  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline-width: 0;
  }
`;
