import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import logoGojek from '../../../assets/logo/gojek.png';
import logoFacebook from '../../../assets/dummy/facebook-connect.png';

const GoInfo = () => {
  return (
    <View style={{ padding: 16, paddingBottom: 0 }}>
      <View style={{ height: 15, width: 55, marginLeft: -2 }}>
        <Image source={logoGojek} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
      </View>
      <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image source={logoFacebook} />
        </View>
        <View style={{ marginLeft: 16, flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4A4A4A' }}>Connect with Facebook</Text>
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '70%', marginBottom: 16 }}>Log in faster without verification code</Text>
          <TouchableOpacity style={{ backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 4 }}>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16 }}></View>
    </View>
  )
}

export default GoInfo

const styles = StyleSheet.create({})
