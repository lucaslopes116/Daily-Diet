import { Image, Text } from 'react-native';

import { Container, Header, PercentOFMeals, NumberPercent, Info, IconArrowUpRight, Meals } from './styles';

import logo from '@assets/logo.png'
import Ellipse from '@assets/Ellipse.png'
import { Button } from '@components/Button';


export function Dashboard() {
  return (
    <Container>
      <Header>
        <Image source={logo} resizeMode='center' />
        <Image source={Ellipse} />
      </Header>

      <PercentOFMeals>
        <NumberPercent>90,86%</NumberPercent>
        <Info>das refeições dentro da dieta</Info>
        <IconArrowUpRight />
      </PercentOFMeals>

      <Meals>Refeições</Meals>
      <Button title="Nova refeição" type="Plus" />
    </Container>
  );
}