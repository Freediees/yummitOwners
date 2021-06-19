import React from 'react'
import { View, Text } from 'react-native'
import AccountScreen from 'App/Components/organism/accountScreen'

export default function AccountContainer({ navigation }) {
  const onLoyalty = () => {
    navigation.navigate('LoyaltyContainer')
  }
  return <AccountScreen onLoyalty={onLoyalty} />
}
