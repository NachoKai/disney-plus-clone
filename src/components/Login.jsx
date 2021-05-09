import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogo src="./assets/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          ​Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
          subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by
          $1.
        </Description>
        <CTALogo src="./assets/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  height: calc(100vh - 70px);
  overflow: hidden;
  background: url("./assets/images/login-background.jpg") center center / cover no-repeat fixed;
`;

const CTA = styled.div`
  width: 90%;
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 58px;
`;

const CTALogo = styled.img`
  width: 100%;
  max-width: 500px;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 16px 0;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin: 16px 0;
  transition: background-color 0.25s ease-out;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.1px;
  text-align: center;
  line-height: 1.5;
`;
