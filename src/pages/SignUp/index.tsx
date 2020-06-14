import React, { useContext, useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Platform, Keyboard } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Subtitle,
  ButtonReturn,
  InputGroup,
  InputText,
  InputLabel,
  ButtonLogin,
  LabelButtonLogin,
  ButtonTooglePass,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const [keyboardActive, setKeyboardActive] = useState(false);

  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  const handleNavigationGoBack = () => {
    navigation.goBack();
  };

  const keyboardDidShow = () => {
    setKeyboardActive(true);
  };

  const keyboardDidHide = () => {
    setKeyboardActive(false);
  };

  const handleSecurePassword = () => {
    setSecurePassword(!securePassword);
  };

  const handleSecureConfirmPassword = () => {
    setSecureConfirmPassword(!secureConfirmPassword);
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);
  });

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <ButtonReturn onPress={handleNavigationGoBack}>
          <Ionicons name="ios-arrow-back" size={24} color={colors.primary} />
        </ButtonReturn>
        <Title keyboardActive={keyboardActive}>Seja bem vindo.</Title>
        <Subtitle>Entre com seus dados para se cadastrar.</Subtitle>
      </Header>
      <Content keyboardActive={keyboardActive}>
        <InputGroup>
          <InputLabel>Email</InputLabel>
          <InputText placeholder="Example@gmail.com" autoCorrect={false} />
        </InputGroup>

        <InputGroup>
          <InputLabel>Senha</InputLabel>
          <InputText
            placeholder="Digtie sua senha.."
            secureTextEntry={securePassword}
          />
          <ButtonTooglePass onPress={handleSecurePassword}>
            {securePassword ? (
              <Ionicons name="ios-eye-off" size={30} color="black" />
            ) : (
              <Ionicons name="ios-eye" size={30} color="black" />
            )}
          </ButtonTooglePass>
        </InputGroup>

        <InputGroup>
          <InputLabel>Confirme sua senha</InputLabel>
          <InputText
            placeholder="Digtie sua senha novamente.."
            secureTextEntry={secureConfirmPassword}
          />
          <ButtonTooglePass onPress={handleSecureConfirmPassword}>
            {secureConfirmPassword ? (
              <Ionicons name="ios-eye-off" size={30} color="black" />
            ) : (
              <Ionicons name="ios-eye" size={30} color="black" />
            )}
          </ButtonTooglePass>
        </InputGroup>

        <ButtonLogin>
          <LabelButtonLogin>Cadastrar-me</LabelButtonLogin>
        </ButtonLogin>
      </Content>
    </Container>
  );
};

export default SignUp;
