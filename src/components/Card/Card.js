import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import theme from '../../styles/theme'
import locale from '../../lang/en-us'

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

const Card = ({ item }) => {
  return (
    <View style={styles.content}>
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

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    creators: PropTypes.string.isRequired,
  }).isRequired,
}

export default memo(Card)
