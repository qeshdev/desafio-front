import styled from 'styled-components';
import { primaryColor, primaryColorHover } from '../../constants/color';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  width: 787px;
  height: 782px;
  border-radius: 24px !important;
  background-color: white;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

export const LogoImage = styled.img`
  width: 100px;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 300px;
`;

export const InputForm = styled.input`
  height: 24px;
  width: 300px;
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

export const ContainerButton = styled.div`
  width: 318px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ButtonForm = styled.button`
  width: 100%;
  background-color: ${primaryColor};
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 10px 0;    
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.0025em;
  color: white;
  cursor: pointer;
  box-shadow: 1px 2px 5px black;
  outline-color: ${primaryColor};
  :hover{
    background-color: ${primaryColorHover};
  }
  :active{
    background-color: ${primaryColor};
  box-shadow: -1px -2px 5px black;
  }
`;
