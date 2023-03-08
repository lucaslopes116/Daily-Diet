import { Image, SectionList, View, Text } from 'react-native';
import { useEffect, useState } from 'react'

import { Container, Header, PercentOFMeals,
   NumberPercent, Info, IconArrowUpRight, Meals, ContainerMeal, 
   NameMeal, HourMeal,CompletedMeal,Date, Divider} from './styles';

import logo from '@assets/logo.png'
import Ellipse from '@assets/Ellipse.png'
import { Button } from '@components/Button';

interface FakeDataProps {
  meals: [{
    date: string,
    hour: string,
    name: string,
    eat: boolean,
  }]
}

const fake = [
  {
    date: '12.08.22',
    data: [
      {
        hour: '20:00',
        meal: 'X-tudo',
        completed: false,
      },
      {
        hour: '16:00',
        meal: 'Whey protein com leite',
        completed: true,
      },
      {
        hour: '12:30',
        meal: 'Salada cesar com frango grelhado',
        completed: true,
      },
      {
        hour: '09:30',
        meal: 'Vitamina de banana com abacate',
        completed: true,
      },
    ]
  },
  {
    date: '11.08.22',
    data: [
      {
        hour: '20:00',
        meal: 'X-tudo',
        completed: false,
      },
      {
        hour: '16:00',
        meal: 'Whey protein com leite',
        completed: true,
      },
      {
        hour: '12:30',
        meal: 'Salada cesar com frango grelhado',
        completed: true,
      },
      {
        hour: '09:30',
        meal: 'Vitamina de banana com abacate',
        completed: true,
      },
    ]
  },
  {
    date: '10.08.22',
    data: [
      {
        hour: '20:00',
        meal: 'X-tudo',
        completed: false,
      },
      {
        hour: '16:00',
        meal: 'Whey protein com leite',
        completed: true,
      },
      {
        hour: '12:30',
        meal: 'Salada cesar com frango grelhado',
        completed: true,
      },
      {
        hour: '09:30',
        meal: 'Vitamina de banana com abacate',
        completed: true,
      },
    ]
  }
]


export function Dashboard() {
  const [meals, setMeals] = useState(()=>{})

  useEffect(()=>{
    let meals = fake.reduce((acc, crr, index)=>{
      acc.totalOfMeals += crr.data.length
      acc.totalMealsCompleted += crr.data.filter((meal => meal.completed)).length

      return acc
    },
      {
        totalOfMeals: 0,
        totalMealsCompleted: 0
      }
    )
    setMeals(meals)
  },[])

  return (
    <Container>
      <Header>
        <Image source={logo} resizeMode='center' />
        <Image source={Ellipse} />
      </Header>

      <PercentOFMeals>
        <NumberPercent>{`${(meals?.totalMealsCompleted * 100 /meals?.totalOfMeals).toFixed(2) }%`}</NumberPercent>
        <Info>das refeições dentro da dieta</Info>
        <IconArrowUpRight />
      </PercentOFMeals>

      <Meals>Refeições</Meals>
      <Button title="Nova refeição" type="Plus" onPress={() => { }} />

      <SectionList
        sections={fake}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={({item}) => (
          <ContainerMeal>
            <HourMeal >{item.hour}</HourMeal>
            <Divider/>
            <NameMeal >{item.meal}</NameMeal>
            <CompletedMeal completed={item.completed}/>
          </ContainerMeal>
        )}
        renderSectionHeader={({section: {date}}) => (
          <Date>{date}</Date>
        )}
    />

    </Container>
  );
}