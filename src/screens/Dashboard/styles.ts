import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  background-color: #F0F2F5;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(22)}px;

  background-color: #1B4E8D;

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: #FFFFFF;

  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: #FFFFFF;

  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
  color: #FF9D2E;

  font-size: ${RFValue(24)}px;
`;

export const ListDevs = styled.View`
  flex: 1;

  padding: 0 24px;
  margin-top: ${RFPercentage(5)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;

  margin-bottom: 16px;
`;
