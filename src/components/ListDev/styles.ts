import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: #FFFFFF;

  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Group1 = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
`;

export const Level = styled.Text`
  font-size: ${RFValue(16)}px;
`;

export const Group2 = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Sexo = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const BirthDate = styled.Text`
  font-size: ${RFValue(16)}px;
`;

export const Age = styled.Text`
  font-size: ${RFValue(16)}px;
`;

export const Hobby = styled.Text`
  font-size: ${RFValue(16)}px;
`;
