import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login, Home} from './src/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  function changeIsUserLogged(logged) {
    setIsUserLogged(logged);
  }

  return (
    <NavigationContainer>
      {isUserLogged ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => (
              <Login
                changeIsUserLogged={logged => changeIsUserLogged(logged)}
                {...props}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
