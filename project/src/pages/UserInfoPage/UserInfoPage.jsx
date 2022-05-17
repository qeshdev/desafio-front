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
      document.getElementById('name').disabled = true;
      document.getElementById('phone').disabled = true;
      document.getElementById('email').disabled = true;
      document.getElementById('nationality').disabled = true;
  },[])
  

  let editable = userLoginDetails.editable;

  
    console.log(userLoginDetails);

  const handleToggleSwitch = () => {
    if(!editable){
      setUserLoginDetails({userName: form.name, phone: form.phone, email: form.email, nationality: form.nationality, editable: true})
      document.getElementById('name').disabled = false;
      document.getElementById('phone').disabled = false;
      document.getElementById('email').disabled = false;
      document.getElementById('nationality').disabled = false;
      console.log('Modo Edição')
    }else{
      setUserLoginDetails({userName: form.name, phone: form.phone, email: form.email, nationality: form.nationality, editable: false})
      document.getElementById('name').disabled = true;
      document.getElementById('phone').disabled = true;
      document.getElementById('email').disabled = true;
      document.getElementById('nationality').disabled = true;
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
              <input type="checkbox" onClick={handleToggleSwitch} value={editable} />
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
            />
            <InputLabel>E-mail</InputLabel>
            <InputForm
              id='email'
              type="email"
              name="email" 
              value={form.email} 
              onChange={onChangeForm} 
            />
            <InputLabel>Nacionalidade</InputLabel>
            <InputForm
              id='nationality'
              type="text"
              name="nationality" 
              value={form.nationality} 
              onChange={onChangeForm}
            />
          </ContainerInputs>
        </ContainerForm>
      </Card>
    </Container>
  )
}

export default UserInfoPage;