// UserProfile.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type UserProfileRouteProps = {
    params: {
        uid: string;
        email: string;
    };
};

const UserProfile: React.FC = () => {
    const route = useRoute<RouteProp<UserProfileRouteProps, 'params'>>();
    const { uid, email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>User ID:</strong> {uid}</Text>
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
