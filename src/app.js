import firebase from 'firebase';
import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import React, { Component } from 'react';
import { createAnimatableComponent } from 'react-native-animatable';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";

import { initialized } from './actions';
import { registerScreens } from './screens';
import watcherSaga from "./sagas";
import reducers from './reducers';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware))
);


export default class App extends Component {

  constructor(props) {
    super(props)

    
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBV8mvyL5Abuu6vxuG4m4nuTPqBZ_7ODAo',
      authDomain: 'manager-d78bf.firebaseapp.com',
      databaseURL: 'https://manager-d78bf.firebaseio.com',
      projectId: 'manager-d78bf',
      storageBucket: '',
      messagingSenderId: '337678362847'
    };
    firebase.initializeApp(config);

    // run the saga
    sagaMiddleware.run(watcherSaga);

    console.log("RUN !!");
    registerScreens(store, Provider);

    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(initialized());
    
  }


  onStoreUpdate() {

    let { route } = store.getState().root;
    console.log('route: ', route)
    console.log('onStoreUpdate getState: ', store.getState());
    // handle a root change
    // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
    if (this.currentRoute != route) {
      this.currentRoute = route;
      this.startApp(route);
    }
  }

  startApp(route) {
    console.log('start APPP !!!')
    switch (route) {
      case Login.settings.screen:
        Navigation.startSingleScreenApp({
          screen: Login.settings
        });
        return;
      case Dashboard.settings.screen:
        Navigation.startSingleScreenApp({
          screen: Dashboard.settings
        });
        return;
      // case Dashboard.settings.screen:
      //   Navigation.startSingleScreenApp({
      //     screen: Dashboard.settings
      //   });
      //   return;
      default: 
        console.log("Route Not Found");
    }
  }
}
