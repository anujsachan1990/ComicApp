import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Card = ({ item }) => {
  return (
    <View key={item.diamond_id} style={styles.content}>
      <Text style={styles.largeText}>{item.title}</Text>
      <Text style={styles.smallText}>description : {item.description}</Text>
      <Text style={styles.smallText}>price: : {item.price}</Text>
      <Text style={styles.smallText}>publisher : {item.publisher}</Text>
      <Text style={styles.smallText}>Release date: : {item.release_date}</Text>
      <Text style={styles.smallText}>creators : {item.creators}</Text>
    </View>
  );
};
export default Card;

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
