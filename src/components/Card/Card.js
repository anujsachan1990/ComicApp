import React, { memo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import theme from '../../styles/theme'
import locale from '../../lang/en-us'

const Card = ({ item }) => {
  return (
    <View key={item.diamond_id} style={styles.content}>
      <Text style={styles.largeText}>{item.title}</Text>
      <Text style={styles.smallText}>
        <Text style={styles.boldText}>{locale.description} </Text>
        {item.description}
      </Text>
      <Text style={styles.smallText}>
        <Text style={styles.boldText}>{locale.price} </Text>
        {item.price}
      </Text>
      <Text style={styles.smallText}>
        <Text style={styles.boldText}>{locale.publisher}</Text>
        {item.publisher}
      </Text>
      <Text style={styles.smallText}>
        <Text style={styles.boldText}>{locale.relaseData}</Text>
        {item.release_date}
      </Text>
      <Text style={styles.smallText}>
        <Text style={styles.boldText}>{locale.creators}</Text> {item.creators}
      </Text>
    </View>
  )
}
export default memo(Card)

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.color.primaryColor,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    minHeight: 300,
  },
  smallText: {
    fontSize: theme.font.bodycopy,
    marginTop: 10,
    color: theme.color.white,
  },
  largeText: {
    fontSize: theme.font.heading,
    color: theme.color.white,
  },
  boldText: {
    fontWeight: 'bold',
  },
})
