import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  
  background-color: #F0F2F5;
`;

export const Header = styled.View`
  background-color: #1B4E8D;
  
  width: 100%;
  height: ${RFValue(113)}px;

  align-items: center;
  justify-content: flex-end;

  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  
  color: #FFFFFF;
`;

export const ListLevelCards = styled.View`
  flex: 1;

  padding: 0 24px;
  margin-top: ${RFPercentage(5)}px;
`;
