import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <Content>Español</Content>
        <Content>Acuerdo de suscripción</Content>
        <Content>Política de privacidad </Content>
        <Content>Publicidad personalizada </Content>
        <Content>Dispositivos compatibles</Content>
        <Content>Ayuda </Content>
        <Content> Acerca de Disney+</Content>
      </Wrap>

      <Wrap>© 2021 Disney y su familia de compañías afiliadas. Todos los derechos reservados.</Wrap>

      <Wrap>
        <Content>
          Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad.
          El servicio Disney+ es comercializado por The Walt Disney Company (Argentina) S.A.,
          Tucumán 1, Piso 4º (C1049AAA) Ciudad Autónoma de Buenos Aires, Argentina y número de CUIT
          30-63984459-1.
        </Content>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 16px 16px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsla(0, 0%, 75.3%, 0.8);
  font-size: 12px;
  margin: 8px 16px;
  max-width: 1000px;
  text-align: center;
`;

const Content = styled.div`
  margin: 0 16px;
  line-height: 1.5;
`;

export default Footer;
