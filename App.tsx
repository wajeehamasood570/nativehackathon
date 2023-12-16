import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Stacknavigation from './config/Stacknavigation'
import { Provider } from 'react-redux'
import store from './config/redux/store'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <Stacknavigation/>
      </Provider>
    )
  }
}

export default App