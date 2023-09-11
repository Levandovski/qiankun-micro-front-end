import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #7842f5;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 780px;
  width: 100%;
  height: 50px;

  a {
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    background-color: #fff;
    color: #000;
    transition: color 0.5s;
    border-bottom: 2px solid #000;
  }
`;
