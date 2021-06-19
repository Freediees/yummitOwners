import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import MenuScreen from 'App/Components/organism/menuScreen'

const MenuContainer = ({ navigation, menu }) => {
  console.log(menu)
  const onAddMenu = () => {
    
    navigation.navigate('AddMenuScreen')
  }

  return <MenuScreen onAddMenu={onAddMenu} menu={menu.dataMenu}/>
}

const mapStateToProps = (state) => ({
  menu: state.menu
})

export default connect(mapStateToProps)(MenuContainer)