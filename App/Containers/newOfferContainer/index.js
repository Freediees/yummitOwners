import React from 'react'
import NewOfferScreen from 'App/Components/organism/newOfferScreen'

export default function NewOfferContainer({ navigation }) {
  const goBack = () => {
    navigation.goBack()
  }
  return <NewOfferScreen goBack={goBack} />
}
