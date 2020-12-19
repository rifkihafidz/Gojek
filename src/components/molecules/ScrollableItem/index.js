import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ScrollableItem = (props) => {
  return (
    <View style={{ marginRight: 16 }}>
      <View style={{ height: 150, width: 150 }}>
        {/* resizeMode: 'cover' untuk memenuhi */}
        <Image source={props.ImageItem} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>{props.TextItem}</Text>
    </View>
  )
}

export default ScrollableItem

const styles = StyleSheet.create({})
