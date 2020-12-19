import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const NavBarIcon = (props) => {
  return (
    <View style={styles.contentBottomNav}>
      <View>
        <Image style={styles.icons} source={props.img} />
      </View>
      <Text style={{ fontSize: 10, marginTop: 4, color: props.active ? '#43AB4A' : '#545454' }}>{props.text}</Text>
    </View>
  )
}

export default NavBarIcon

const styles = StyleSheet.create({
  contentBottomNav: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icons: { width: 26, height: 26 },
})
