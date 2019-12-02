import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { theme } from '~/styles/theme';
import { Container, Title } from './styles';

const SignIn = () => (
  <ThemeProvider theme={theme}>
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View>
        <Title>Entrar</Title>
      </View>
      {/* <View>
        <Text style={styles.title}>Entrar</Text>

        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          autoFocus
          returnKeyType="next"
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          returnKeyType="send"
        />

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View> */}
    </Container>
  </ThemeProvider>
);

export default SignIn;
