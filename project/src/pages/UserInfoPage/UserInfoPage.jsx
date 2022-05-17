import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userPhoto from '../../assets/user-photo.png';
import GlobalStateContext from '../../context/GlobalStateContext';
import { Container, Card, UserImage, ContainerPhoto, ContainerForm, InputLabel, ContainerInputs, InputForm, ContainerOutterSwitch, ContainerInnerSwitch } from './Styled';
import useForm from '../../hooks/useForm';

const UserInfoPage = () => {
  const navigate = useNavigate();
 
  const { states, setters } = useContext(GlobalStateContext);
  const { userLoginDetails } = states;
  const { setUserLoginDetails } = setters;

  const { form, onChangeForm, cleanFields } = useForm({ email: userLoginDetails.email, name: userLoginDetails.userName, phone: userLoginDetails.phone, nationality: userLoginDetails.nationality});

  useEffect(()=>{
    console.log(form);
  },[form])
  
  const onSubmitForm = (event) => {
    setUserLoginDetails({userName: form.name, phone: form.phone, email: form.email, nationality: form.nationality})
    console.log(userLoginDetails)
    event.preventDefault();
    console.log('Editado com sucesso!');
    console.log(form)
  }

  let editable = false;

  const handleToggleSwitch = () => {
    if(editable){
      editable = false;
      document.getElementById('name').disabled = true;
      document.getElementById('phone').disabled = true;
      document.getElementById('email').disabled = true;
      document.getElementById('nationality').disabled = true;
      console.log('Modo Visualização')
    }else{
      editable = true;
      console.log('Modo Edição')
      document.getElementById('name').disabled = false;
      document.getElementById('phone').disabled = false;
      document.getElementById('email').disabled = false;
      document.getElementById('nationality').disabled = false;
    }
  }

  return (
    <Container>
      <Card>
        <ContainerPhoto />
        <UserImage src={userPhoto} alt="user-photo" />
        <ContainerOutterSwitch>          
          <ContainerInnerSwitch>
            <label className="switch">
              <input type="checkbox" onChange={handleToggleSwitch} value={editable} />
              <span className="slider round"></span>
            </label>
            <label>Modo editor</label>
          </ContainerInnerSwitch>
        </ContainerOutterSwitch>
        <ContainerForm>
          <ContainerInputs>
            <InputLabel>Nome</InputLabel>
            <InputForm
              id='name'
              type="text"
              name="name" 
              value={form.name} 
              onChange={onChangeForm} 
              disabled
            />
            <InputLabel>Telefone</InputLabel>
            <InputForm
              id='phone'
              type="text"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title='O correto é +55 31 9 9999 9999'
              name="phone" 
              value={form.phone} 
              onChange={onChangeForm} 
              disabled
            />
            <InputLabel>E-mail</InputLabel>
            <InputForm
              id='email'
              type="email"
              name="email" 
              value={form.email} 
              onChange={onChangeForm} 
              disabled
            />
            <InputLabel>Nacionalidade</InputLabel>
            <InputForm
              id='nationality'
              type="text"
              name="nationality" 
              value={form.nationality} 
              onChange={onChangeForm}
              disabled
            />
          </ContainerInputs>
        </ContainerForm>
      </Card>
    </Container>
  )
}

export default UserInfoPage;