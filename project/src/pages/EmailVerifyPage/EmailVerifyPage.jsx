import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-colored-transparent.png';
import GlobalStateContext from '../../context/GlobalStateContext';
import { Container, Card, LogoImage, ContainerLogo, ContainerForm, InputLabel, InputForm, ContainerButton, ButtonForm, ContainerLabel } from './Styled';
import useForm from '../../hooks/useForm';
import { goToLogin } from '../../routes/coordinator';

const EmailVerifyPage = () => {
  const navigate = useNavigate();
 
  const { states } = useContext(GlobalStateContext);
  const { userLoginDetails } = states;

  const { form, onChangeForm, cleanFields } = useForm({ email: ""});

  
  const focusEmailOnLoad = () => {
    document.getElementById("loginEmailVerify").focus();
  }

  useEffect(()=>{
    focusEmailOnLoad();
  },[])

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(form.email === userLoginDetails.email){
      cleanFields();
      goToLogin(navigate);
    }else{
      alert('Este e-mail informado ainda não está cadastrado.');
    }
  }


  return (
    <Container>
      <Card>
        <ContainerLogo>
          <LogoImage src={logo} alt="logo" />
        </ContainerLogo>
        <ContainerForm>
            <ContainerLabel>
              <InputLabel>E-mail</InputLabel>
            </ContainerLabel>
              <InputForm
                id='loginEmailVerify'
                type="email"
                name="email" 
                value={form.email} 
                onChange={onChangeForm} 
              />
          <ContainerButton>
            <ButtonForm onClick={onSubmitForm}>Prosseguir</ButtonForm>
          </ContainerButton>
        </ContainerForm>
      </Card>
    </Container>
  )
}

export default EmailVerifyPage