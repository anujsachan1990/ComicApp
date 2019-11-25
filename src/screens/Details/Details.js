import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Content, Text, View } from "native-base";
import MainContainer from "../../components/MainContainer/MainContainer";
import MainActivityIndicator from "../../components/MainActivityIndicator/MainActivityIndicator";

const DetailsScreen = props => {
  const [isLoading, setLoading] = useState(true);
  const [comicDetail, setDetail] = useState({});

  useEffect(() => {
    const { navigation } = props;
    const itemId = navigation.state.params.item.diamond_id;
    // code to run on component mount
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

  const content = () => {
    let content = null;
    if (isLoading) {
      content = <MainActivityIndicator />;
    } else {
      content = (
        <View>
          {comicDetail.comicDetail &&
            comicDetail.comicDetail.comics.map(item => {
              return (
                <View key={item.diamond_id} style={styles.content}>
                  <Text style={styles.largeText}>{item.title}</Text>
                  <Text style={styles.smallText}>
                    description : {item.description}
                  </Text>
                  <Text style={styles.smallText}>price: : {item.price}</Text>
                  <Text style={styles.smallText}>
                    publisher : {item.publisher}
                  </Text>

                  <Text style={styles.smallText}>
                    Release date: : {item.release_date}
                  </Text>

                  <Text style={styles.smallText}>
                    creators : {item.creators}
                  </Text>
                </View>
              );
            })}
        </View>
      );
    }
    return content;
  };

  return (
    <MainContainer>
      <Content padder contentContainerStyle={isLoading ? styles.content : {}}>
        {content()}
      </Content>
    </MainContainer>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#00838d",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    minHeight: 300
  },
  smallText: {
    fontSize: 15,
    marginTop: 10,
    color: "#fff"
  },
  largeText: {
    fontSize: 20,
    color: "#fff"
  }
});
