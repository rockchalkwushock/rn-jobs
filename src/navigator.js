import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  AuthScreen,
  DeckScreen,
  MapScreen,
  ReviewScreen,
  SettingsScreen,
  WelcomeScreen,
} from './screens';

const MainNavigator = TabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: TabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: StackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen },
        }),
      },
    }),
  },
});

export default MainNavigator;
