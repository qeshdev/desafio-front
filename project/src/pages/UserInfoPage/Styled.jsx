import styled from 'styled-components';
import { primaryColor, primaryColorHover } from '../../constants/color';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #E5E5E5;
`;

export const Card = styled.div`
  width: 787px;
  height: 782px;
  border-radius: 24px;
  background-color: white;
  position: absolute;
  box-shadow: 0 0 10px ${primaryColor};
`;


export const UserImage = styled.img`
  width: 100px;
  background-color: white;
  border-radius: 50%;
  border: 3px solid white;
  position: relative;
  left: 50%;
  top: -7%;
  transform: translateX(-50%);
  box-shadow: 0 0 5px black;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 120px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 400px;
`;

export const InputForm = styled.input`
  height: 24px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 4px 8px;
  font-size: 16px;
  margin-bottom: 15px;
  outline-color: ${primaryColor};
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  line-height: 24px;
`;

/* Switch */

export const ContainerOutterSwitch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  .switch {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 26px;
    border: 0;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
    border: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #E0E0E0;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #521AA3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #521AA3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(19px);
    -ms-transform: translateX(19px);
    transform: translateX(19px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const ContainerInnerSwitch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 400px;
  label:nth-child(2){
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const LogoutIcon = styled.button`
  position: absolute;
  right: 20px;
  color: white;
  font-size: 20px;
  background-color: #00000047;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  :hover{
    background-color: #00000081;
  }
  :active{
    background-color: #00000047;
  box-shadow: -1px -2px 5px black;
  }
`;