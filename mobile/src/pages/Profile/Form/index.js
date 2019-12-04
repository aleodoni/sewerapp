import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Formik } from 'formik';

import {
  Container,
  Form,
  FormInput,
  Separator,
  SubmitButton,
  LogoutButton,
} from '../styles';

import { Error } from './styles';

import Logo from '~/components/Logo';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function FormikForm() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  function handleLogout() {
    dispatch(signOut());
  }

  const formValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    oldPassword: Yup.string().min(6),
    password: Yup.string()
      .min(6)
      .when('oldPassword', (oldPassword, field) =>
        oldPassword ? field.required() : field
      ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')]) : field
    ),
  });

  return (
    <Container>
      <Logo />
      <Formik
        validationSchema={formValidationSchema}
        initialValues={{
          name,
          email,
          oldPassword: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={values => {
          dispatch(updateProfileRequest(values));
          setName(values.name);
          setEmail(values.email);
          values.oldPassword = '';
          values.password = '';
          values.confirmPassword = '';
        }}
      >
        {props => (
          <Form>
            <FormInput
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              returnKeyType="next"
              value={props.values.name}
              onSubmitEditing={() => emailRef.current.focus()}
              onChangeText={props.handleChange('name')}
            />
            {props.errors.name && props.touched.name ? (
              <Error>{props.errors.name}</Error>
            ) : null}

            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => oldPasswordRef.current.focus()}
              value={props.values.email}
              onChangeText={props.handleChange('email')}
            />
            {props.errors.email && props.touched.email ? (
              <Error>{props.errors.email}</Error>
            ) : null}

            <Separator />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Senha atual"
              ref={oldPasswordRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={props.values.oldPassword}
              onChangeText={props.handleChange('oldPassword')}
            />
            {props.errors.oldPassword && props.touched.oldPassword ? (
              <Error>{props.errors.oldPassword}</Error>
            ) : null}

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Nova senha"
              ref={passwordRef}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              value={props.values.password}
              onChangeText={props.handleChange('password')}
            />
            {props.errors.password && props.touched.password ? (
              <Error>{props.errors.password}</Error>
            ) : null}

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Confirmação de senha"
              ref={confirmPasswordRef}
              returnKeyType="send"
              value={props.values.confirmPassword}
              onChangeText={props.handleChange('confirmPassword')}
            />
            {props.errors.confirmPassword && props.touched.confirmPassword ? (
              <Error>{props.errors.confirmPassword}</Error>
            ) : null}

            <SubmitButton onPress={props.handleSubmit}>
              Atualizar perfil
            </SubmitButton>
            <LogoutButton onPress={handleLogout}>Sair do Sewerapp</LogoutButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

FormikForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    oldPassword: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    oldPassword: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
  }),
  touched: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    oldPassword: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
  }),
};

FormikForm.defaultProps = {
  touched: {
    name: '',
    email: '',
    oldPassword: '',
    password: '',
    confirmPassword: '',
  },
  errors: {
    name: '',
    email: '',
    oldPassword: '',
    password: '',
    confirmPassword: '',
  },
  values: {
    name: '',
    email: '',
    oldPassword: '',
    password: '',
    confirmPassword: '',
  },
  handleSubmit: null,
  handleChange: null,
};
