import {View, Text, Button} from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

interface RouterProps {
    navigation:NavigationProp<any, any>;
}

const Intro = ({navigation} : RouterProps) => {
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;
    const handleProfileOpen = () => {
        if (user) {
          navigation.navigate('Profile', {
            uid: user.uid,
            email: user.email,
          });
        }
    };
    return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Button onPress ={(handleProfileOpen)} title='Open Profile'  />
        <Button onPress ={()=> FIREBASE_AUTH.signOut()} title='Logout'  />
    </View>
    )
}

export default Intro