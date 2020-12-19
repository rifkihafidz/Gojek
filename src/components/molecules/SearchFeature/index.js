import React from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native'
import iconSearch from '../../../assets/icon/search.png';
import iconPromo from '../../../assets/icon/promo.png';

const SearchFeature = () => {
  return (
    <View style={styles.wrapperSearchBar}>
      <View style={{ position: 'relative', flex: 1 }}>
        <TextInput placeholder="What do you want to eat?" style={styles.searchBar} />
        <Image source={iconSearch} style={styles.iconSearch} />
      </View>
      <View style={styles.iconPromo}>
        <Image source={iconPromo} />
      </View>
    </View>
  )
}

export default SearchFeature

const styles = StyleSheet.create({
  wrapperSearchBar: { marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 },
  searchBar: { borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 },
  iconSearch: { position: 'absolute', top: 5, left: 12 },
  iconPromo: { width: 35, alignItems: 'center', justifyContent: 'center' },
})
