import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userPhoto from '../../assets/user-photo.png';
import GlobalStateContext from '../../context/GlobalStateContext';
import { Container, Card, UserImage, ContainerPhoto, ContainerForm, InputLabel, ContainerInputs, InputForm, ContainerButton, ButtonForm } from './Styled';
import useForm from '../../hooks/useForm';
import { goToUserInfopage } from '../../routes/coordinator';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();
 
  const { states } = useContext(GlobalStateContext);
  const { userLoginDetails } = states;

  const { form, onChangeForm, cleanFields } = useForm({ email: userLoginDetails.email, password: ""});

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(form.email === userLoginDetails.email && form.password === userLoginDetails.password){      
      cleanFields();
      localStorage.setItem('token', Math.random().toString(36).substr(2))
      toast.success('Login realizado com sucesso');
      goToUserInfopage(navigate);
    }else{
      toast.error('Usuário ou senha incorretos!');
    }
  }

  const focusPasswordOnLoad = () => {
    document.getElementById("loginPassword").focus();
  }

  useEffect(()=>{
    focusPasswordOnLoad();
    console.log(userLoginDetails);
  },[])

  return (
    <Container>
      <Card>
        <ContainerPhoto />
        <UserImage src={userPhoto} alt="user-photo" />
        <ContainerForm>
          <ContainerInputs>
            <InputLabel>E-mail</InputLabel>
            <InputForm
              type="email"
              name="email" 
              value={form.email} 
              onChange={onChangeForm} 
            />
            <InputLabel>Senha</InputLabel>
            <InputForm
              id='loginPassword'
              type="password"
              name="password" 
              value={form.password} 
              onChange={onChangeForm}
            />
          </ContainerInputs>
          <ContainerButton>
            <ButtonForm onClick={onSubmitForm}>Logar</ButtonForm>
          </ContainerButton>
        </ContainerForm>
        <ToastContainer />
      </Card>
    </Container>
  )
}

export default LoginPage;