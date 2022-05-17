import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-colored-transparent.png';
import GlobalStateContext from '../../context/GlobalStateContext';
import { Container, Card, LogoImage, ContainerLogo, ContainerForm, InputLabel, InputForm, ContainerButton, ButtonForm, ContainerLabel } from './Styled';
import useForm from '../../hooks/useForm';
import { goToLogin } from '../../routes/coordinator';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import useUnprotectedPage from '../../hooks/useUnprotectedPage';



const EmailVerifyPage = () => {
  useUnprotectedPage();
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
      toast.error('Email informado está incorreto ou ainda não foi cadastrado!');
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
        <ToastContainer />
        </ContainerForm>
      </Card>
    </Container>
  )
}

export default EmailVerifyPage