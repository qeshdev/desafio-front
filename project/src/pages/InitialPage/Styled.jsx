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
  background-color: ${primaryColor};
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
