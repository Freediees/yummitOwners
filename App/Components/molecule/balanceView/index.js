import React from 'react'
import { View, Text } from 'react-native'
import Colors from 'App/Theme/Colors'
import Icon from 'react-native-vector-icons/Ionicons'

export default function BalanceView() {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        paddingHorizontal: 25,
        alignItems: 'center',
      }}
    >
      <View>
        <Text style={{ fontSize: 10, color: 'white' }}>Yummpay</Text>
        <Text style={{ fontSize: 20, color: 'white' }}>Rp50.000</Text>
      </View>
      <Icon name="chevron-forward" color={'white'} size={30} />
    </View>
  )
}
