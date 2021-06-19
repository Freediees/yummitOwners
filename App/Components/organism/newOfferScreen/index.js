import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Header from 'App/Components/molecule/customHeader'
import TextInput from 'App/Components/molecule/defaultInputText'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from 'App/Theme/Colors'

export default function NewOfferScreen({ goBack }) {
  return (
    <View style={{ flex: 1 }}>
      <Header
        title={'New Offer'}
        iconLeft={'arrow-back'}
        iconRight={'checkmark'}
        onLeftPress={() => {
          goBack()
        }}
        onRightPress={() => {
          goBack()
        }}
      />
      <View style={{ padding: 16, paddingTop: 32 }}>
        <TextInput placeholder={'Promo Title'} onChangeText={() => {}} />
        <TextInput placeholder={'Discount'} onChangeText={() => {}} />
        <TextInput placeholder={'Offer Time Span'} onChangeText={() => {}} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 0.5,
          borderColor: Colors.grey,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="book-outline" size={30} color={Colors.primary} />
          <Text style={{ fontSize: 16, marginLeft: 8 }}>Add Menu</Text>
        </View>
        <TouchableOpacity>
          <Icon name="add-outline" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
