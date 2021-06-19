import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Header from 'App/Components/molecule/customHeader'
import CustomHeader from '../../molecule/customHeader'
import AvatarCard from '../../molecule/avatarCard'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from 'App/Theme/Colors'

const data = [
  { id: 1, point: '100', label: '3 item reached' },
  { id: 2, point: '80', label: '2 item reached' },
]
const ImageView = () => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginBottom: 32,
        backgroundColor: 'white',
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={require('App/Assets/Images/money.png')}
        resizeMode="cover"
      />
      <Text style={{ marginVertical: 8, marginTop: 16 }}>0 pts</Text>
      <Text style={{ fontSize: 10, color: 'grey' }}>6 Orders reached</Text>
    </View>
  )
}

const listView = (item) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        padding: 4,
        paddingHorizontal: 12,
        margin: 2,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="alarm" size={30} color={Colors.primary} style={{ marginRight: 10 }} />
        <Text>{item.item.label}</Text>
      </View>
      <Text>{item.item.point}</Text>
    </View>
  )
}

export default function LoyaltyScreen({ goBack }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title="Loyalty Points"
        iconLeft="arrow-back"
        onLeftPress={() => {
          goBack()
        }}
      />
      <View style={{ marginTop: 20 }}>
        <ImageView />
      </View>
      <View style={{ padding: 16, flex: 1 }}>
        <Text>Achievements</Text>
        <View style={{ flex: 1 }}>
          <FlatList data={data} renderItem={(item) => listView(item)} />
        </View>
      </View>
    </View>
  )
}
