import React, { useState, useEffect, memo } from "react";
import { StyleSheet } from "react-native";
import { Content, Text, View } from "native-base";
import MainContainer from "../../components/MainContainer/MainContainer";
import MainActivityIndicator from "../../components/MainActivityIndicator/MainActivityIndicator";
import Card from "../../components/Card/Card";

const DetailsScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [comicDetail, setDetail] = useState({});

  useEffect(() => {
    const { navigation } = props;
    const itemId = navigation.state.params.item.diamond_id;
    fetchData(`https://api.shortboxed.com/comics/v1/diamond_id/${itemId}`);
  }, []);

  const fetchData = url => {
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        setDetail({ comicDetail: responseJson });
        setLoading(false);

        return responseJson;
      })
      .catch(error => console.log("Error fetching data:", error));
  };

  const getcontent = () => {
    return isLoading ? (
      <MainActivityIndicator />
    ) : (
      <View>
        {comicDetail.comicDetail &&
          comicDetail.comicDetail.comics.map(item => {
            return <Card key={item.diamond_id} item={item} />;
          })}
      </View>
    );
  };

  return (
    <MainContainer>
      <Content padder contentContainerStyle={isLoading ? styles.content : {}}>
        {getcontent()}
      </Content>
    </MainContainer>
  );
};

export default memo(DetailsScreen);

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#00838d",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    minHeight: 300
  }
});
