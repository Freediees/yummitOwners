import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from 'App/Theme/Colors'
import AvatarCard from 'App/Components/molecule/avatarCard'
import BalanceView from 'App/Components/molecule/balanceView'
import Icon from 'react-native-vector-icons/Ionicons'

const ListItem = ({ label, onPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 2,
      }}
    >
      <Text>{label}</Text>
      <Icon name="chevron-forward" color={Colors.primary} size={30} />
    </View>
  )
}

export default function AccountScreen({ onLoyalty }) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 32,
          paddingHorizontal: 32,
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <Text style={styles.headerButton}>EDIT</Text>
        <Text style={styles.headerButton}>LOGOUT</Text>
      </View>

      <AvatarCard />
      <BalanceView />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={() => {
          onLoyalty()
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="cash" color={Colors.primary} size={20} style={{ marginRight: 10 }} />
          <Text>Loyalty 0</Text>
        </View>
        <Icon name="chevron-forward" color={Colors.primary} size={30} />
      </TouchableOpacity>

      <View style={{ backgroundColor: Colors.lightGrey, flex: 1 }}>
        {/* <View style={{ flexDirection: 'row' }}>
          <Text></Text>
        </View> */}
        <ListItem label={'Help'} />
        <ListItem label={'Term and Conditions'} />
        <ListItem label={'About'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerButton: {
    color: Colors.primary,
  },
})
