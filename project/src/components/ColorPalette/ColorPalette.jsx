import React from 'react';
import styled from 'styled-components';
import { Container, Lista } from './Styled';


const ColorItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  list-style: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 10px;
  ${(props) => {    
    if(props.color === 'color1'){
      return 'background-color: #FEFE33'
    }else if(props.color === 'color2'){
      return 'background-color: #FABC02'
    }else if(props.color === 'color3'){
      return 'background-color: #FB9902'
    }else if(props.color === 'color4'){
      return 'background-color: #FD5308'
    }else if(props.color === 'color5'){
      return 'background-color: #FE2712'
    }else if(props.color === 'color6'){
      return 'background-color: #A7194B'
    }else if(props.color === 'color7'){
      return 'background-color: #8601AF'
    }else if(props.color === 'color8'){
      return 'background-color: #3D01A4'
    }else if(props.color === 'color9'){
      return 'background-color: #0247FE'
    }else if(props.color === 'color10'){
      return 'background-color: #0392CE'
    }else if(props.color === 'color11'){
      return 'background-color: #66B032'
    }else if(props.color === 'color12'){
      return 'background-color: #D0EA2B'
    }else if(props.color === 'color13'){
      return 'background-color: #42C1C7'
    }         
  }}
`;

const onClickChangeColor = (color) => {
  const containerUserDetails = document.getElementById('containerUserDetails');
  containerUserDetails.style.backgroundColor = color;
}

const ColorPalette = () => {
  return (
    <Container>
      <Lista>
        <ColorItem color='color1' onClick={()=>{onClickChangeColor('#FEFE33')}}></ColorItem>
        <ColorItem color='color2' onClick={()=>{onClickChangeColor('#FABC02')}}></ColorItem>
        <ColorItem color='color3' onClick={()=>{onClickChangeColor('#FB9902')}}></ColorItem>
        <ColorItem color='color4' onClick={()=>{onClickChangeColor('#FD5308')}}></ColorItem>
        <ColorItem color='color5' onClick={()=>{onClickChangeColor('#FE2712')}}></ColorItem>
        <ColorItem color='color6' onClick={()=>{onClickChangeColor('#A7194B')}}></ColorItem>
        <ColorItem color='color7' onClick={()=>{onClickChangeColor('#8601AF')}}></ColorItem>
        <ColorItem color='color8' onClick={()=>{onClickChangeColor('#3D01A4')}}></ColorItem>
        <ColorItem color='color9' onClick={()=>{onClickChangeColor('#0247FE')}}></ColorItem>
        <ColorItem color='color10' onClick={()=>{onClickChangeColor('#0392CE')}}></ColorItem>
        <ColorItem color='color11' onClick={()=>{onClickChangeColor('#66B032')}}></ColorItem>
        <ColorItem color='color12' onClick={()=>{onClickChangeColor('#D0EA2B')}}></ColorItem>
        <ColorItem title='Voltar a cor original' color='color13' onClick={()=>{onClickChangeColor('#42C1C7')}}><i class="fas fa-undo"></i></ColorItem>
      </Lista>
    </Container>
  )
}

export default ColorPalette