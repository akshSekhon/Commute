import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants/common';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import SvgAuthLogo from '../assets/images/auth_logo.svg';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';

// Helper function for translation
const t = (key: keyof typeof TRANSLATION_KEYS) => i18n.translate(TRANSLATION_KEYS[key]);

// Ensure this path is correct

// Replace 'Login' with the actual screen name for this component as defined in your RootStackParamList
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function Login({ navigation }: Props): React.JSX.Element {

    return (
        <LinearGradient
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            style={styles.container}
        >


            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <SafeAreaView>

                    <SvgAuthLogo style={{ alignSelf: 'center', marginBottom: 32 }} />
                    <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.hello_again)}</Text>
                    <View style={{ paddingHorizontal: 50 }}>
                        <CustomTextInput
                            placeholder={i18n.t(TRANSLATION_KEYS.email)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <CustomTextInput
                            placeholder={i18n.t(TRANSLATION_KEYS.password)}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                        <Text style={styles.subtitle}>{i18n.t(TRANSLATION_KEYS.forgot_password)}</Text>
                        <View style={{ paddingTop: 50 }} />
                        <CustomButton
                            title={i18n.t(TRANSLATION_KEYS.login)}
                            onPress={() => navigation.replace('MainTabs')}
                            style={{ marginTop: 20, backgroundColor: Colors.blue0A1C26 }}
                            textStyle={{ fontSize: 18, fontWeight: '600' }}
                        />

                    </View>

                </SafeAreaView>
            </ScrollView>

            <SafeAreaView style={styles.registerContainer}>
                <Text style={styles.registerText}>{i18n.t(TRANSLATION_KEYS.dont_have_account)}</Text>
                <Text
                    style={styles.registerLink}
                    onPress={() => {
                        navigation.navigate('Signup');
                    }}
                >
                    {i18n.t(TRANSLATION_KEYS.registration)}
                </Text>
            </SafeAreaView>

            {/* ...existing children... */}
        </LinearGradient>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        minWidth: '100%',
        minHeight: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 40,
        textAlign: 'center',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textDecorationLine: 'underline',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        textAlign: 'left',
        paddingBottom: 20,
    },
    registerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    registerText: {
        fontSize: 16,
        paddingBottom: 10,
        color: '#333',
    },
    registerLink: {
        color: Colors.blue0A1C26,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
});

export default Login;