import React from 'react'
import { View, Text } from 'react-native'
import AccountScreen from 'App/Components/organism/accountScreen'
import NavigationService from 'App/Services/NavigationService'
import AsyncStorage from '@react-native-community/async-storage'

export default function AccountContainer({ navigation }) {
  const onLogout = () => {
    AsyncStorage.removeItem('phone')
    AsyncStorage.removeItem('email')
    navigation.navigate('routeOne')
  }
  const onLoyalty = () => {
    navigation.navigate('LoyaltyContainer')
  }
  return <AccountScreen onLoyalty={onLoyalty} onLogout={onLogout} />
}
