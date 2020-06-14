import React, { useContext, useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  ButtonNavigationLogin,
  LabelButtonNavigationLogin,
  Header,
  Footer,
  ViewCreateAccount,
  LabelCreateAccount,
  ButtonNavigationSignUp,
  LabelNavigationSignUp,
  Subtitle,
} from './styles';

interface DefaultData {
  email: string;
  password: string;
}

import { getDefaultDataLogin } from '../../services/auth';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);

  const [defaultData, setDefaultData] = useState<DefaultData | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getDefaultDataLogin();
      setDefaultData(data);
    })();
  }, []);

  const handleNavigationLogin = () => {
    navigation.navigate('Login');
  };

  const handleNavigationSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <Header>
        {defaultData && (
          <MaterialCommunityIcons
            name="fingerprint"
            size={70}
            color={colors.primary}
          />
        )}
        {!defaultData && (
          <MaterialCommunityIcons
            name="calendar"
            size={70}
            color={colors.primary}
          />
        )}

        <Title>
          {defaultData ? 'Entre com a digital' : 'Bom te ver aqui! 😁'}
        </Title>
        <Subtitle>
          {defaultData
            ? 'Use sua digital, é mais rápido e prático ter acesso a sua conta.'
            : 'Organize seus horários agora mesmo.'}
        </Subtitle>
      </Header>

      <Footer>
        <ButtonNavigationLogin onPress={handleNavigationLogin}>
          <LabelButtonNavigationLogin>
            Entrar com email
          </LabelButtonNavigationLogin>
        </ButtonNavigationLogin>

        <ViewCreateAccount>
          <LabelCreateAccount>É novo por aqui?</LabelCreateAccount>
          <ButtonNavigationSignUp onPress={handleNavigationSignUp}>
            <LabelNavigationSignUp> Cadastre-se.</LabelNavigationSignUp>
          </ButtonNavigationSignUp>
        </ViewCreateAccount>
      </Footer>
    </Container>
  );
};

export default Home;
