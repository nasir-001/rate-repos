import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { t } from 'react-native-tailwindcss';
import { Link } from 'react-router-native';

import useAuthorized from '../hooks/useAuthorize';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e'
    },
    scrollView: {
        marginHorizontal: 20,
    },
});



const AppBar = () => {
    const { isAuthorized, signOut } = useAuthorized();

    return (
        <View style={[styles.container]}>
            <ScrollView horizontal style={styles.scrollView}>
                <Link to="/">
                    <TouchableOpacity>
                        <Text style={[t.pB5, t.pR3, t.text4xl, t.textBlue500, t.trackingWide]}>Repositories</Text>
                    </TouchableOpacity>
                </Link>
                {isAuthorized ? (
                  <>
                    <Link to="/signin">
                      <TouchableOpacity style={[t.pT2,]}>
                          <Text
                            style={[t.text2xl, t.textGray400, t.pL12, t.trackingWide]}
                          >Sign In</Text>
                      </TouchableOpacity>
                    </Link>
                  </>
                   ) : (
                  <>
                    <Link to="/">
                        <TouchableOpacity 
                            style={[t.pT2,t.text2xl,  t.textGray400, t.pL12, t.trackingWide]}
                            onPress={() => signOut()}
                            >
                            <Text
                            style={[t.text2xl,  t.textGray400, t.pL12, t.trackingWide]}
                            >Log out</Text>
                        </TouchableOpacity>
                    </Link>
                  </>
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;