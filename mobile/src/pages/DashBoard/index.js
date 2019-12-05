import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container } from './styles';

function DashBoard() {
  const [geos, setGeos] = useState([]);

  useEffect(() => {
    async function loadGeos() {
      const response = await api.get('geos');
      console.tron.log(response.data);

      setGeos(response.data);
    }

    loadGeos();
  }, []);

  return (
    <Background>
      <Container />
      {geos.map(geo => (
        <p>{geo.latitude}</p>
      ))}
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

export default withNavigationFocus(DashBoard);
