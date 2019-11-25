import React, { useState, useEffect, memo } from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Content, View } from 'native-base'
import MainContainer from '../../components/MainContainer/MainContainer'
import MainActivityIndicator from '../../components/MainActivityIndicator/MainActivityIndicator'
import Card from '../../components/Card/Card'
import apiService from '../../services/apiURL'
import theme from '../../styles/theme'
import utils from '../../utilities'

const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.color.primaryColor,
    padding: 20,
    margin: 20,
    borderRadius: 10,
    minHeight: 300,
  },
})

const DetailsScreen = props => {
  const [isLoading, setLoading] = useState(true)
  const [comicDetail, setDetail] = useState({})

  useEffect(() => {
    const { navigation } = props
    const itemId = navigation.state.params.item.diamond_id

    utils.fetchData(`${apiService.getDetailByDiamondId}${itemId}`).then(data => {
      setDetail({ comicDetail: data })
      setLoading(false)
    })
  }, [props])

  const getcontent = () => {
    return isLoading ? (
      <MainActivityIndicator />
    ) : (
      <View>
        {comicDetail.comicDetail &&
          comicDetail.comicDetail.comics.map(item => {
            return <Card key={item.diamond_id} item={item} />
          })}
      </View>
    )
  }

  return (
    <MainContainer>
      <Content padder contentContainerStyle={isLoading ? styles.content : {}}>
        {getcontent()}
      </Content>
    </MainContainer>
  )
}

DetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        item: PropTypes.shape({
          diamond_id: PropTypes.string.isRequired,
        }),
      }),
    }),
  }).isRequired,
}

export default memo(DetailsScreen)
