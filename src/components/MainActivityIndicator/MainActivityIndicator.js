import React, { memo } from 'react'

import { ActivityIndicator, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const mainActivityIndicator = () => (
  <View style={styles.activityIndicatorContainer}>
    <ActivityIndicator />
  </View>
)

export default memo(mainActivityIndicator)
