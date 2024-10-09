import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCardd = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}

export default UserCardd

const styles = StyleSheet.create({})