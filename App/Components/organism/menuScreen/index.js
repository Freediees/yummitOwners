import React, { useState } from 'react'
import { View, Text, Image, FlatList, Switch } from 'react-native'
import Header from 'App/Components/molecule/header'
import CustomHeader from 'App/Components/molecule/customHeader'
import Menu from 'App/Components/molecule/menuCard'
import Modal from 'App/Components/molecule/modalBottom'

const MenuScreen = ({ onAddMenu, menu }) => {
  const [modal, setModal] = useState(false)
  const [isEnable, setIsEnable] = useState(false)
  const [selected, setSelected] = useState(0)

  const renderMenu = (item) => {
    return (
      <Menu
        name={item.item.name}
        price={item.item.totalStock}
        imageUrl={item.item.imageUrl}
        onPress={() => {
          console.log(item.item)
          setSelected(item.index)
          setModal(!modal)
        }}
      />
    )
  }

  const renderModal = () => {
    return (
      <View style={{ padding: 16, width: '100%', paddingBottom: 50 }}>
        <Image
          style={{
            width: '100%',
            height: 150,
            backgroundColor: 'grey',
            borderRadius: 10,
            marginVertical: 10,
          }}
          source={{ uri: menu[selected].imageUrl }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{menu[selected].name}</Text>
          <Text style={{ fontSize: 14 }}>Rp. {menu[selected].price}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Stock Available</Text>
            <Text style={{ fontSize: 14, color: 'grey' }}>
              {menu[selected].totalStock} Portions
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setIsEnable(!isEnable)
            }}
            value={isEnable}
          />
        </View>

        <Text style={{ fontSize: 14, color: 'grey' }}>{menu[selected].desc}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Modal isOpen={modal} onClosed={() => setModal(false)}>
        {renderModal()}
      </Modal>
      <CustomHeader
        title={'Bangkit Cafe'}
        iconLeft={'chevron-back'}
        iconRight={'receipt-outline'}
        onRightPress={() => onAddMenu()}
      />
      <Image
        style={{ width: '100%', height: 150 }}
        resizeMode="stretch"
        source={require('App/Assets/Images/taxGroup.png')}
      />
      <View style={{ padding: 16, flex: 1 }}>
        <FlatList syle={{ width: '100%' }} data={menu} renderItem={(item) => renderMenu(item)} />
      </View>
    </View>
  )
}

export default MenuScreen
