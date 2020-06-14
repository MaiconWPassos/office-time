import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 60}px;
`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.color};
  font-family: 'Ubuntu_700Bold';
  font-size: 40px;
  margin-top: 30px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_100Thin';
  color: ${(props) => props.theme.colors.color};
  text-align: center;
  margin-top: 20px;
`;

export const ButtonNavigationLogin = styled(RectButton)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  border-radius: 10px;
  height: 60px;
`;

export const LabelButtonNavigationLogin = styled.Text`
  font-size: 22px;
  font-family: 'Roboto_500Medium';
  color: ${(props) => props.theme.colors.color};
`;

export const ViewCreateAccount = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LabelCreateAccount = styled.Text`
  font-size: 18px;
  font-family: 'Roboto_100Thin';
  color: ${(props) => props.theme.colors.color};
`;

export const ButtonNavigationSignUp = styled(RectButton)`
  background-color: transparent;
  padding: 0;
`;
export const LabelNavigationSignUp = styled.Text`
  font-size: 18px;

  font-family: 'Roboto_500Medium';
  color: ${(props) => props.theme.colors.color};
`;
