import React, { useState, memo } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Header, Item, Input, Icon, Card, CardItem, Body } from "native-base";

import MainContainer from "../../components/MainContainer/MainContainer";
import MainActivityIndicator from "../../components/MainActivityIndicator/MainActivityIndicator";
import alert from "../../utilities/alert";

const SearchScreen = props => {
  const [isLoading, setLoading] = useState(false);
  const [results, setResult] = useState({});

  const searchInputOnChangeTextHandler = searchStr => {
    if (searchStr.trim() !== "" && searchStr.length >= 3) {
      let url = `https://api.shortboxed.com/comics/v1/query?title=${searchStr}`;
      setLoading(true);
      fetchData(url)
        .then(data => {
          setResult({
            comics: data.comics ? data.comics.slice(0, 3) : [],
            fullResults: data.comics ? data.comics.slice(0, 10) : []
          });

          setLoading(false);
        })
        .catch(error => {
          console.log("Error:", error);
          setLoading(false);
        });
    } else {
      setResult({});
    }
  };

  const fetchData = url => {
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => console.log("Error fetching data:", error));
  };

  const cardItemOnPressHandler = item => {
    const { navigate } = props.navigation;
    navigate("Detail", { item });
  };

  const searchSubmit = () => {
    setResult({
      comics: results.fullResults
    });
  };

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
              borderRadius: 5
            }}
          >
            <CardItem
              button
              onPress={() => cardItemOnPressHandler(item)}
              style={{
                backgroundColor: "#00838d",
                borderRadius: 5
              }}
            >
              <Body>
                <Text style={{ fontSize: 16, color: "#fff" }}>
                  {item.title}
                </Text>
              </Body>
            </CardItem>
          </Card>
        )}
      />
    );
  };

  return (
    <MainContainer>
      <Header transparent searchBar rounded>
        <Item
          style={{
            backgroundColor: "#fff"
          }}
        >
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
          <Text
            style={{
              fontSize: 20,
              marginTop: 150,
              textAlign: "center"
            }}
          >
            Start Typing to Search for a comic
          </Text>
        )}
      </View>
    </MainContainer>
  );
};

export default memo(SearchScreen);

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  flatListContainer: {
    padding: 20
  }
});
