import styled from "styled-components";

export const Input = styled.input`
  border-radius: 4px;
  border-color: #c7c7d8;
  padding: 4px;
  min-width: 200px;
  max-width: 400px;
  border-width: 2px;
  font-size: 0.75rem;

  &:focus {
    border-color: #6e5494;
    outline: none;
  }
`;
