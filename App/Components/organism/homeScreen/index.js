import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import styles from './styles'
import Header from '../../molecule/header'
import Colors from 'App/Theme/Colors'
import HomeCard from '../../molecule/homeCard'
import Spinner from 'App/Components/atom/customSpinner'

export default function LoginScreen({ toDetailOrder, orderList, dataProccess, isLoading = false }) {
  const [status, setStatus] = useState(0)

  const renderOrderList = (item) => {
    return (
      <HomeCard
        name={''}
        qty={item.item.items.length}
        total={item.item.total}
        status={item.item.delivery_flag == 'delivery' ? 1 : 0}
        onPress={() => {
          toDetailOrder(item.item)
        }}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Spinner visible={isLoading} />
      <Header />
      <View
        style={{
          height: 60,
          backgroundColor: Colors.primary,
          flexDirection: 'row',
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}
          onPress={() => {
            setStatus(0)
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 16 }}>New</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}
          onPress={() => {
            setStatus(1)
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 16 }}>
            On Proccess
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}
          onPress={() => {
            setStatus(2)
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 16 }}>Past</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {status == 0 ? (
          <FlatList data={orderList} renderItem={(item) => renderOrderList(item)} />
        ) : status == 1 ? (
          <FlatList data={dataProccess || []} renderItem={(item) => renderOrderList(item)} />
        ) : (
          <View />
        )}
      </View>
    </View>
  )
}
