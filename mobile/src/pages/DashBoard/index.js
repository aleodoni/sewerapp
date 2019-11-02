import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {Container} from './styles';

function DashBoard() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

DashBoard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({tintColor}) => <Icon name="list" size={20} color={tintColor} />,
};

export default withNavigationFocus(DashBoard);
