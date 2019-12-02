import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.background};
  justify-content: center;
  align-items: stretch;
  /* padding: 30; */
`;

export const Title = styled.Text`
  font-size: 28;
  margin-bottom: 20;
  color: ${props => props.theme.white};
  text-align: center;
`;
