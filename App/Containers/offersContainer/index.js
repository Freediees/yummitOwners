import React from 'react'
import OfferScreen from 'App/Components/organism/offerScreen'

export default function OfferContainer({ navigation }) {
  const newOffer = () => {
    navigation.navigate('NewOfferContainer')
  }
  return <OfferScreen newOffer={newOffer} />
}
