import { Image, SectionList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "phosphor-react-native";

import {
  Container,
  Header,
  PercentOFMeals,
  NumberPercent,
  Info,
  Meals,
  ContainerMeal,
  NameMeal,
  HourMeal,
  CompletedMeal,
  Date,
  Divider,
} from "./styles";

import logo from "@assets/logo.png";
import Ellipse from "@assets/Ellipse.png";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

interface FakeDataProps {
  meals: [
    {
      date: string;
      hour: string;
      name: string;
      eat: boolean;
    }
  ];
}

const fake = [
  {
    date: "12.08.22",
    data: [
      {
        hour: "20:00",
        meal: "X-tudo",
        completed: false,
      },
      {
        hour: "16:00",
        meal: "Whey protein com leite",
        completed: true,
      },
      {
        hour: "12:30",
        meal: "Salada cesar com frango grelhado",
        completed: true,
      },
      {
        hour: "09:30",
        meal: "Vitamina de banana com abacate",
        completed: true,
      },
    ],
  },
  {
    date: "11.08.22",
    data: [
      {
        hour: "20:00",
        meal: "X-tudo",
        completed: false,
      },
      {
        hour: "16:00",
        meal: "Whey protein com leite",
        completed: false,
      },
      {
        hour: "12:30",
        meal: "Salada cesar com frango grelhado",
        completed: true,
      },
      {
        hour: "09:30",
        meal: "Vitamina de banana com abacate",
        completed: true,
      },
    ],
  },
  {
    date: "10.08.22",
    data: [
      {
        hour: "20:00",
        meal: "X-tudo",
        completed: false,
      },
      {
        hour: "16:00",
        meal: "Whey protein com leite",
        completed: false,
      },
      {
        hour: "12:30",
        meal: "Salada cesar com frango grelhado",
        completed: false,
      },
      {
        hour: "09:30",
        meal: "Vitamina de banana com abacate",
        completed: false,
      },
    ],
  },
];

export function Dashboard() {
  const [meals, setMeals] = useState(() => {});
  const [percentageOfMeals, setPercentageOfMeals] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    let meals = fake.reduce(
      (acc, crr, index) => {
        acc.totalOfMeals += crr.data.length;
        acc.totalMealsCompleted += crr.data.filter(
          (meal) => meal.completed
        ).length;

        return acc;
      },
      {
        totalOfMeals: 0,
        totalMealsCompleted: 0,
      }
    );

    let bestSequence = 0;
    for (let index = 0; index < fake.length; index++) {
      let month = fake[index].data;

      for (let index = 0; index < month.length; index++) {
        console.log(month[index].hour);
        console.log(bestSequence);

        if (month[index].completed) {
          // bestSequence += 1

          if (!!month[index + 1] && month[index + 1].completed) {
            bestSequence += 1;
          }
        }
      }
    }

    // console.log(bestSequence)

    setMeals(meals);
    setPercentageOfMeals(
      ((meals?.totalMealsCompleted * 100) / meals?.totalOfMeals).toFixed(2)
    );
  }, []);

  const handleToStatics = () => {
    navigation.navigate("dietStatistic", {
      percentageOfMeals,
      meals,
    });
  };

  const handleRegisterMeal = () => {
    navigation.navigate("registerMeal");
  };

  return (
    <Container>
      <Header>
        <Image source={logo} resizeMode="center" />
        <Image source={Ellipse} />
      </Header>

      <PercentOFMeals percentage={percentageOfMeals}>
        <NumberPercent>{`${percentageOfMeals}%`}</NumberPercent>
        <Info>das refeições dentro da dieta</Info>
        <TouchableOpacity
          onPress={handleToStatics}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <ArrowUpRight
            size={24}
            weight="thin"
            color={percentageOfMeals > 50 ? "#639339" : "#BF3B44"}
          />
        </TouchableOpacity>
      </PercentOFMeals>

      <Meals>Refeições</Meals>
      <Button title="Nova refeição" type="Plus" onPress={handleRegisterMeal} />

      <SectionList
        sections={fake}
        keyExtractor={(item, index) => item.hour + index}
        renderItem={({ item }) => (
          <ContainerMeal>
            <HourMeal>{item.hour}</HourMeal>
            <Divider />
            <NameMeal>{item.meal}</NameMeal>
            <CompletedMeal completed={item.completed} />
          </ContainerMeal>
        )}
        renderSectionHeader={({ section: { date } }) => <Date>{date}</Date>}
      />
    </Container>
  );
}
