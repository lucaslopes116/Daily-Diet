import { useNavigation } from '@react-navigation/native';
import {  NumberPercent } from '@screens/Dashboard/styles';
import {  ArrowLeft } from 'phosphor-react-native';



import { Container, ContainerArrow, PercentOFMealsStatistic,
   InfoStatistic, ContainerStatistic, Title,Wrapper,SequenceOfDishes,
   RegisteredMeals,MealsWithinTheDiet,OffDietMeals,WarperTotal,
   Numbers,InfosAboutDiet
   } from './styles';

export function DietStatistic(props) {
  const { route } = props
  const navigation = useNavigation()

  const handleGoBack = () => {
    navigation.navigate('dashboard')
  }


  return (
    <Container>
      <PercentOFMealsStatistic percentage={route.params.percentageOfMeals}>
        <NumberPercent style={{paddingTop: 72}}>{`${route.params.percentageOfMeals}%`}</NumberPercent>
        <InfoStatistic>das refeições dentro da dieta</InfoStatistic>
        <ContainerArrow onPress={handleGoBack}>
          <ArrowLeft  size={24} weight='thin'  color={route.params.percentageOfMeals > 50 ? '#639339' : '#BF3B44'}/>
        </ContainerArrow>
      </PercentOFMealsStatistic>

      <ContainerStatistic>
          <Title>Estatísticas gerais</Title>
          <Wrapper>
            <SequenceOfDishes>
              <Numbers></Numbers>
              <InfosAboutDiet>melhor sequência de pratos dentro da dieta</InfosAboutDiet>
            </SequenceOfDishes>
            <RegisteredMeals>
              <Numbers>{route.params.meals.totalOfMeals}</Numbers>
              <InfosAboutDiet>refeições registradas</InfosAboutDiet>
            </RegisteredMeals>
            <WarperTotal>
              <MealsWithinTheDiet>
                <Numbers>{route.params.meals.totalMealsCompleted}</Numbers>
                <InfosAboutDiet>refeições dentro da dieta</InfosAboutDiet>
              </MealsWithinTheDiet>
              <OffDietMeals>
                <Numbers>{route.params.meals.totalOfMeals - route.params.meals.totalMealsCompleted}</Numbers>
                <InfosAboutDiet>refeições fora da dieta</InfosAboutDiet>
              </OffDietMeals>
            </WarperTotal>
          </Wrapper>
      </ContainerStatistic>
    </Container>
  );
}