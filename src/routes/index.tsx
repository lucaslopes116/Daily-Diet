import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard } from '@screens/Dashboard';


const { Navigator, Screen } =
  createNativeStackNavigator();

export function Routes() {

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen component={Dashboard} name="dashboard" />

      </Navigator>
    </NavigationContainer>
  );

}