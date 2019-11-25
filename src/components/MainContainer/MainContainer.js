import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";

const mainContainer = props => (
  <Container style={{ backgroundColor: "#F3F3F3" }}>{props.children}</Container>
);

export default mainContainer;
