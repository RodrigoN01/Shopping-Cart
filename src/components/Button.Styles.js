import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px 20px;
  outline: none;
  border: 2px solid #000;
  cursor: pointer;
  white-space: nowrap;
  background-color: #fff;
  color: #000;

  &:hover {
    color: #fff;
    background-color: #000;
    transition: all 0.2s ease-out;
  }
`;
