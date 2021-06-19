import React from 'react'
import LoyaltyScreen from 'App/Components/organism/loyaltyScreen'

export default function LoyaltyContainer({ navigation }) {
  const goBack = () => {
    navigation.goBack()
  }
  return <LoyaltyScreen goBack={goBack} />
}
