import styled from 'styled-components';

export const CartContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 45px;
  right: 40px;
  z-index: 5;

  @media (max-width: 765px) {
    width: 430px;
    height: 500px;
  }
`;

export const CartItems = styled.li`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
