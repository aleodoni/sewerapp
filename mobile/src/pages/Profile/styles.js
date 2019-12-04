import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  align-self: center;

  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 20px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  margin-left: 30px;
  margin-right: 30px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #a13043;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
