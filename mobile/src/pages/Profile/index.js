import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import Form from './Form';

export default function Profile() {
  return (
    <Background>
      <Form />
    </Background>
  );
}

function ProfileIcon({ tintColor }) {
  return <Icon name="person" size={20} color={tintColor} />;
}

ProfileIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ProfileIcon,
};
