import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavBarIcon from '../../../components/molecules/NavBarIcon'

class NavBar extends Component {
  render() {
    return (
      <View style={styles.wrapperBottomNav}>
        <NavBarIcon img={require('../../../assets/icon/home-active.png')} text="Home" active />
        <NavBarIcon img={require('../../../assets/icon/order.png')} text="Orders" />
        <NavBarIcon img={require('../../../assets/icon/help.png')} text="Help" />
        <NavBarIcon img={require('../../../assets/icon/inbox.png')} text="Inbox" />
        <NavBarIcon img={require('../../../assets/icon/account.png')} text="Account" />
      </View>
    )
  }
}

export default NavBar

const styles = StyleSheet.create({ wrapperBottomNav: { height: 54, backgroundColor: 'white', flexDirection: 'row' } })
