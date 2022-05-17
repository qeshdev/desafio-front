import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userPhoto from '../../assets/user-photo.png';
import GlobalStateContext from '../../context/GlobalStateContext';
import { Container, Card, UserImage, ContainerForm, InputLabel, ContainerInputs, InputForm, ContainerOutterSwitch, ContainerInnerSwitch, LogoutIcon } from './Styled';
import useForm from '../../hooks/useForm';
import ColorPalette from '../../components/ColorPalette/ColorPalette';
import styled from 'styled-components';
import { primaryColor, primaryColorHover } from '../../constants/color';


const ContainerPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  border-radius: 24px 24px 0 0;
  background-color: ${primaryColor};
  ${(props) => {    
    if(props.color === '#42C1C7'){
      return 'background-color: #42C1C7'
    }else if(props.color === '#FEFE33'){
      return 'background-color: #FEFE33'
    }else if(props.color === '#FABC02'){
      return 'background-color: #FABC02'
    }else if(props.color === '#FB9902'){
      return 'background-color: #FB9902'
    }else if(props.color === '#FD5308'){
      return 'background-color: #FD5308'
    }else if(props.color === '#FE2712'){
      return 'background-color: #FE2712'
    }else if(props.color === '#A7194B'){
      return 'background-color: #A7194B'
    }else if(props.color === '#8601AF'){
      return 'background-color: #8601AF'
    }else if(props.color === '#3D01A'){
      return 'background-color: #3D01A4'
    }else if(props.color === '#0247FE'){
      return 'background-color: #0247FE'
    }else if(props.color === '#0392C'){
      return 'background-color: #0392CE'
    }else if(props.color === '#66B03'){
      return 'background-color: #66B032'
    }else if(props.color === '#D0EA2B'){
      return 'background-color: #D0EA2B'
    }     
  }}
`;

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
      
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Não está logado!!!");
      navigate("/login");
    }
  },[])
  

  let editable = userLoginDetails.editable;

  
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

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <Container>      
      <Card>
        <ContainerPhoto id="containerUserDetails" color={userLoginDetails.color}>
          <LogoutIcon onClick={logout}>
            <i className="fas fa-sign-out"></i>
          </LogoutIcon>
        </ContainerPhoto>
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
        {editable === true ? <ColorPalette/> : null}
      </Card>
    </Container>
  )
}

export default UserInfoPage;