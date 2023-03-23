import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Dashboard } from "@screens/Dashboard";
import { DietStatistic } from "@screens/DietStatistic";
import { RegisterMeal } from "@screens/RegisterMeal";

export interface RootStackParamList {
  dashboard: undefined;
  registerMeal: undefined;
  dietStatistic: {
    percentageOfMeals: number;
    meals: {
      totalOfMeals: number;
      totalMealsCompleted: number;
    };
  };
}

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen component={Dashboard} name="dashboard" />
        <Screen component={DietStatistic} name="dietStatistic" />
        <Screen component={RegisterMeal} name="registerMeal" />
      </Navigator>
    </NavigationContainer>
  );
}
