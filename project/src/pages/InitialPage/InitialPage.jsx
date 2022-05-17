import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-white-transparent.png';
import { goToVerifyEmail } from '../../routes/coordinator';
import { Card, Container, ContainerLogo, LogoImage } from './Styled';

const InitialPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(() => goToVerifyEmail(navigate), 3000);
  },[]);


  return (
    <Container>
      <Card>
        <ContainerLogo>
          <LogoImage src={logo} alt="logo" />
        </ContainerLogo>
      </Card>
    </Container>
  )
}

export default InitialPage