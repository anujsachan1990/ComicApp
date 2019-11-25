import React from "react";
import Search from "./src/screens/Search/SearchScreen";
import Detail from "./src/screens/Details/DetailsScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//register navigaton
const MainNavigator = createStackNavigator({
  Home: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: "Search"
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.item.title
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;
