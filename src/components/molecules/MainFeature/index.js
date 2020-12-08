import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const MainFeature = (props) => {
  return (
    <View style={styles.mainFeature}>
      <View style={styles.mainFeatureIconWrapper}>
        <Image source={props.iconMainFeature} />
      </View>
      <Text style={styles.textFeature}>{props.textMainFeature}</Text>
    </View>
  )
}

export default MainFeature

const styles = StyleSheet.create({
  mainFeature: { width: '25%', alignItems: 'center', marginBottom: 18 },
  mainFeatureIconWrapper: { width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  textFeature: { fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }
})
