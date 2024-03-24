import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const API_URL = 'https://reqres.in/api/login';

const App = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    sendLoginRequest();
  }, []);

  const sendLoginRequest = async () => {
    try {
      const response = await axios.post(API_URL, {
        
        RegNo: '112181502',
        Password: '6504104',
      });

      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Access Token: {accessToken}</Text>
    </View>
  );
};

export default App;