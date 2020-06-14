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
  Footer,
  Subtitle,
  ButtonReturn,
  InputGroup,
  InputText,
  InputLabel,
  ButtonLogin,
  LabelButtonLogin,
  ButtonNavigateSignUp,
  LabelButtonNavigateSignUp,
  ButtonTooglePass,
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const [keyboardActive, setKeyboardActive] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

  const handleNavigationGoBack = () => {
    navigation.goBack();
  };

  const keyboardDidShow = () => {
    setKeyboardActive(true);
  };

  const keyboardDidHide = () => {
    setKeyboardActive(false);
  };

  const handleNavigationSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSecurePassword = () => {
    setSecurePassword(!securePassword);
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
        <Subtitle>Entre com seu login e senha para prosseguir.</Subtitle>
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

        <ButtonLogin>
          <LabelButtonLogin>Entrar</LabelButtonLogin>
        </ButtonLogin>
      </Content>
      <Footer>
        <ButtonNavigateSignUp onPress={handleNavigationSignUp}>
          <LabelButtonNavigateSignUp>Cadastre-se</LabelButtonNavigateSignUp>
        </ButtonNavigateSignUp>
      </Footer>
    </Container>
  );
};

export default Login;
