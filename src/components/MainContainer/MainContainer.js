import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Container } from 'native-base'
import theme from '../../styles/theme'

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.color.grey,
  },
})

const MainContainer = ({ children }) => <Container style={styles.content}>{children}</Container>

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(MainContainer)
