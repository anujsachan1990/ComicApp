import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import theme from '../../styles/theme'

const mainContainer = ({ children }) => <Container style={styles.content}>{children}</Container>

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.color.grey,
  },
})

export default memo(mainContainer)
