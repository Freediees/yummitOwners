import React from 'react'
import { Text, Image } from 'react-native'
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import DeepLinkingScreen from 'App/Containers/DeepLinking/DeepLinkingScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/loginContainer'
import HomeScreen from 'App/Containers/homeContainer'
import MenuScreen from 'App/Containers/menuContainer'
import AddMenuScreen from 'App/Components/organism/addMenuScreen'
import AccountContainer from 'App/Containers/accountContainer'
import LoyaltyContainer from 'App/Containers/loyaltyContainer'
import DetailOrderContainer from 'App/Containers/detailOrderContainer'
import OfferContainer from 'App/Containers/offersContainer'
import NewOfferContainer from 'App/Containers/newOfferContainer'
import Svg, { SvgCssUri, Circle, Rect, SvgXml } from 'react-native-svg'
import Ionicons from 'react-native-vector-icons/Ionicons'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const OrdersStackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: HomeScreen,
    },
    HomeScreen: {
      screen: HomeScreen,
    },
    MenuScreen: {
      screen: MenuScreen,
    },
    AddMenuScreen: {
      screen: AddMenuScreen,
    },
    DetailOrderContainer: {
      screen: DetailOrderContainer,
    },
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

const AuthStackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: LoginScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

const MenuStackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MenuScreen,
    },
    MenuScreen: {
      screen: MenuScreen,
    },
    AddMenuScreen: {
      screen: AddMenuScreen,
    },
  },
  {
    headerMode: 'none',
  }
)

const AccountStackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: AccountContainer,
    },
    AccountContainer: {
      screen: AccountContainer,
    },
    LoyaltyContainer: {
      screen: LoyaltyContainer,
    },
  },
  {
    headerMode: 'none',
  }
)

const OfferStackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: OfferContainer,
    },
    OfferContainer: {
      screen: OfferContainer,
    },
    NewOfferContainer: {
      screen: NewOfferContainer,
    },
  },
  {
    headerMode: 'none',
  }
)

const AppTabNavigator = createBottomTabNavigator(
  {
    Orders: {
      screen: OrdersStackNavigator,
    },
    Menu: {
      screen: MenuStackNavigator,
    },
    Offers: {
      screen: OfferStackNavigator,
    },
    Accounts: {
      screen: AccountStackNavigator,
    },
  },
  {
    initialRouteName: 'Orders',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        let size
        if (routeName === 'Orders') {
          iconName = require('App/Assets/Images/tab1.png')
          size = 22
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Menu') {
          iconName = require('App/Assets/Images/tab2.png')
          size = 28
        } else if (routeName === 'Offers') {
          iconName = require('App/Assets/Images/tab3.png')
          size = 28
        } else if (routeName === 'Accounts') {
          iconName = require('App/Assets/Images/tab4.png')
          size = 28
        }

        // You can return any component that you like here!
        // return <SvgXml height={size} width={size} xml={iconName} />;
        return <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={iconName} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'gray',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
    },
  }
)

const AppSwitchNavigator = createSwitchNavigator(
  {
    routeOne: AuthStackNavigator,
    // routeOne: NewOfferContainer,
    routeTwo: AppTabNavigator,
  },
  {
    initialRouteName: 'routeOne',
  }
)
export default createAppContainer(AppSwitchNavigator)
