import styled from "styled-components";

export const MessageBox = styled.div`
  position: fixed;
  left: 50%;
  top: 5%;
  transform: translateX(-50%);
  height: 60px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 20px;
  z-index: 100;
  border: 1px solid black;
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(0, 210, 0);
  font-weight: 500;
`;
