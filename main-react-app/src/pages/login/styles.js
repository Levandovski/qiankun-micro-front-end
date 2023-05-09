import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 150px;

  button {
    background-color: #7842f5;
    color: #fff;
    border: none;
    padding: 25px;
    width: 150px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: #8f66ee;
    color: #fffabc;
  }
`;
