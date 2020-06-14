import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ButtonReturn = styled(RectButton)`
  margin-bottom: 20px;
`;

export const Title = styled.Text<{
  keyboardActive: boolean;
}>`
  color: ${(props) => props.theme.colors.color};
  font-family: 'Ubuntu_700Bold';
  font-size: ${(props) => (props.keyboardActive ? 20 : 40)}px;
`;

export const Subtitle = styled.Text`
  color: ${(props) => props.theme.colors.color};
  font-family: 'Roboto_100Thin';
  font-size: 16px;
  margin-top: 5px;
`;

export const Content = styled.View<{
  keyboardActive: boolean;
}>`
  flex: 3;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => (props.keyboardActive ? 60 : 0)}px;
`;

export const InputGroup = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 0px;
  position: relative;
`;

export const InputLabel = styled.Text`
  color: ${(props) => props.theme.colors.color};
  font-family: 'Roboto_500Medium';
  font-size: 16px;
  margin: 10px 0px;
`;

export const InputText = styled.TextInput`
  background-color: #fff;
  width: 100%;
  height: 65px;
  border-radius: 10px;
  font-size: 20px;
  padding: 8px 20px;
  font-family: 'Roboto_500Medium';
  color: ${(props) => props.theme.colors.secondary};
`;

export const ButtonTooglePass = styled.TouchableOpacity`
  position: absolute;
  bottom: 18px;
  right: 28px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogin = styled(RectButton)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  border-radius: 10px;
  height: 60px;
`;

export const LabelButtonLogin = styled.Text`
  font-size: 22px;
  font-family: 'Roboto_500Medium';
  color: ${(props) => props.theme.colors.color};
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonNavigateSignUp = styled(RectButton)`
  background-color: transparent;
  padding: 0;
`;

export const LabelButtonNavigateSignUp = styled.Text`
  font-family: 'Roboto_100Thin';
  color: ${(props) => props.theme.colors.color};
  text-decoration: underline;
  font-size: 18px;
`;
