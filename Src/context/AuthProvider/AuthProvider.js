import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthLoading, setAuthLoading] = useState(true);

  useEffect(() => {
   /* AsyncStorage.getItem('@user').then(userSession => {
      userSession && setUser(JSON.parse(userSession));
      setAuthLoading(true);
    });*/
  }, []);
  const store = createStore(reducers, {user, isAuthLoading});
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;
