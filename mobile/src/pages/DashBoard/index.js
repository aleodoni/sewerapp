import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container } from './styles';

function DashBoard({ isFocused }) {
  useEffect(() => {
    if (isFocused) {
      // loadMeetups();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container />
    </Background>
  );
}

function DashboardIcon({ tintColor }) {
  return <Icon name="location-on" size={20} color={tintColor} />;
}

DashboardIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

DashBoard.navigationOptions = {
  tabBarLabel: 'Meus Pontos',
  tabBarIcon: DashboardIcon,
};

DashBoard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(DashBoard);
