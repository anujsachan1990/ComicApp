import React, { useState, memo } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import { Header, Item, Input, Icon, Card, CardItem, Body } from 'native-base'
import theme from '../../styles/theme'
import apiService from '../../services/apiURL'
import MainContainer from '../../components/MainContainer/MainContainer'
import MainActivityIndicator from '../../components/MainActivityIndicator/MainActivityIndicator'
import locale from '../../lang/en-us'
import { fetchData } from '../../utilities/index'

const SearchScreen = props => {
  const [isLoading, setLoading] = useState(false)
  const [results, setResult] = useState({})

  const searchInputOnChangeTextHandler = searchStr => {
    if (searchStr.trim() !== '' && searchStr.length >= 3) {
      const url = `${apiService.getResultbyTitle}${searchStr}`
      setLoading(true)
      fetchData(url)
        .then(data => {
          setResult({
            comics: data.comics ? data.comics.slice(0, 3) : [],
            fullResults: data.comics ? data.comics.slice(0, 10) : [],
          })
          setLoading(false)
        })
        .catch(error => {
          console.log(locale.apiError, error)
          setLoading(false)
        })
    } else {
      setResult({})
    }
  }

  const cardItemOnPressHandler = item => {
    const { navigate } = props.navigation
    navigate('Detail', { item })
  }

  const searchSubmit = () => {
    setResult({
      comics: results.fullResults,
    })
  }

  const getContent = () => {
    return isLoading ? (
      <MainActivityIndicator />
    ) : (
      <FlatList
        data={results.comics}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <Card
            style={{
              borderRadius: 5,
            }}
          >
            <CardItem
              button
              onPress={() => cardItemOnPressHandler(item)}
              style={{
                backgroundColor: theme.color.primaryColor,
                borderRadius: theme.borderRadius,
              }}
            >
              <Body>
                <Text style={styles.cardText}>{item.title}</Text>
              </Body>
            </CardItem>
          </Card>
        )}
      />
    )
  }

  return (
    <MainContainer>
      <Header transparent searchBar rounded>
        <Item style={styles.itemBg}>
          <Icon name="ios-search" />
          <Input
            autoFocus
            placeholder="Search..."
            onSubmitEditing={searchSubmit}
            onChangeText={searchInputOnChangeTextHandler}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </Item>
      </Header>
      <View style={isLoading ? styles.content : styles.flatListContainer}>
        {getContent()}
        {!isLoading && !results.comics && !results.fullResults && (
          <Text style={styles.screenText}>{locale.screenText}</Text>
        )}
      </View>
    </MainContainer>
  )
}

export default memo(SearchScreen)

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  screenText: {
    fontSize: theme.font.heading,
    marginTop: 150,
    textAlign: 'center',
  },
  flatListContainer: {
    padding: theme.padding,
  },
  itemBg: {
    backgroundColor: theme.color.white,
  },
  cardText: {
    fontSize: theme.font.bodycopy,
    color: theme.color.white,
  },
})
