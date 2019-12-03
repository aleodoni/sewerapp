import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const DateSelect = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Button = styled(RectButton)`
  color: #fff;
`;
