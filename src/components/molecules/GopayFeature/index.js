import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const GopayFeature = (props) => {
  return (
    <View style={styles.gopayContent}>
      <Image source={props.iconGopayFeature} />
      <Text style={styles.textGopay}>{props.titleGopayFeature}</Text>
    </View>
  )
}

export default GopayFeature

const styles = StyleSheet.create({
  textGopay: { color: 'white', fontSize: 13, fontWeight: 'bold', marginTop: 15 },
  gopayContent: { flex: 1, alignItems: 'center' },
})
