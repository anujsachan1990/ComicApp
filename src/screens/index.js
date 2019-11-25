import { Navigation } from 'react-native-navigation'

import SearchScreen from './Search/Search'
import DetailsScreen from './Details/Details'

// register all screens of the app (including internal ones)
export const registerScreens = () => {
  Navigation.registerComponent('commic.SearchScreen', () => SearchScreen)
  Navigation.registerComponent('commic.DetailsScreen', () => DetailsScreen)
}
