import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Header from 'App/Components/molecule/header'
import CustomHeader from 'App/Components/molecule/customHeader'
import Menu from 'App/Components/molecule/menuCard'
import Colors from 'App/Theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default function OfferScreen({ newOffer }) {
  const [showHeader, setShowHeader] = useState(false)
  const onShowHeader = () => {
    // navigation.navigate('AddMenu');
    setShowHeader(!showHeader)
  }

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title={'Offers'}
        iconRight={'ribbon-outline'}
        onRightPress={() => onShowHeader()}
      />
      {showHeader ? (
        <View
          style={{
            height: 80,
            backgroundColor: Colors.primary,
            width: '100%',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              newOffer()
            }}
          >
            <Icon name={'alarm-outline'} size={25} color={'white'} />
            <Text style={{ color: 'white', fontSize: 14 }}>New Offer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={'book-outline'} size={25} color={'white'} />
            <Text style={{ color: 'white', fontSize: 14 }}>Event Offer</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}
      >
        <Image
          style={{ width: 140, height: 140 }}
          resizeMode={'contain'}
          source={require('App/Assets/Images/coupon.png')}
        />
        <Text style={{ fontSize: 16, color: Colors.darkGrey, margin: 4 }}>No offers yet</Text>
        <Text style={{ fontSize: 12, color: Colors.primary, margin: 4 }}>What's an offer?</Text>
      </View>
    </View>
  )
}
