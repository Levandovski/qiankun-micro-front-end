import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Content } from "./styles";
import { addAuthenticate } from "../../store/reducers/authenticate";

function Login() {
  const dispatch = useDispatch();
  const { authenticate } = useSelector((state) => state.authenticate);

  const handleLogin = () => {
    dispatch(addAuthenticate(!authenticate));
  };

  return (
    <Container>
      <Content>
        <h1>Logar</h1>
        <button onClick={handleLogin}>{authenticate ? "ON" : "OFF"}</button>
      </Content>
    </Container>
  );
}

export default Login;
