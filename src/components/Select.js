import React from 'react'
import { View, StyleSheet } from 'react-native'
import { theme } from '../constants/theme'
import { Select as SelectDropdown } from 'react-native-select-dropdown'

export default function Select({ cargos,  ...props }) {
  return (
    <View style={styles.container}>
      <SelectDropdown
        style={styles.input}
	      data={cargos}
	      onSelect={(selectedItem, index) => {
	      	console.log(selectedItem, index)
	      }}
	      buttonTextAfterSelection={(selectedItem, index) => {
	      	// text represented after item is selected
	      	// if data array is an array of objects then return selectedItem.property to render after item is selected
	      	return selectedItem
	      }}
	      rowTextForSelection={(item, index) => {
	      	// text represented for each item in dropdown
	      	// if data array is an array of objects then return item.property to represent item in dropdown
	      	return item
	      }}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#fff',
    width:320,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
  },
  image: {
    width: 50
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
