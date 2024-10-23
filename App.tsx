import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './app/screens/Login';
import Intro from './app/screens/Intro';
import Profile from './app/screens/Profile';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();

const insideStack = createNativeStackNavigator();

function insideLayout () {
  return (
    <insideStack.Navigator>
      <insideStack.Screen name='Intro' component={Intro} />
      <insideStack.Screen name='Profile' component={Profile} />
    </insideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null); 

  useEffect(() =>{
    onAuthStateChanged(FIREBASE_AUTH, (user) =>{
      setUser(user);
    });
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name="Profile" component={insideLayout} options={{headerShown: false}} />

        ) : (
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}