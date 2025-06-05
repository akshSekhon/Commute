import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SvgAuthLogo from '../assets/images/auth_logo.svg';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { Colors } from '../constants/common';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { navigateAndReset, pushTo } from '../navigation/NavigationService';
import { moderateScale } from '../Utils/responsiveSize';

// Helper function for translation
const t = (key: keyof typeof TRANSLATION_KEYS) => i18n.translate(TRANSLATION_KEYS[key]);

function Login() {

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
                            // onPress={() => navigation.replace('MainTabs')}
                            onPress={() => navigateAndReset('MainTabs')}
                            style={{ marginTop: 20, backgroundColor: Colors.blue0A1C26 }}
                            textStyle={{ fontSize: moderateScale(16), fontWeight: '700' }}
                        />

                    </View>

                </SafeAreaView>
            </ScrollView>

            <SafeAreaView style={styles.registerContainer}>
                <Text style={styles.registerText}>{i18n.t(TRANSLATION_KEYS.dont_have_account)}</Text>
                <Text
                    style={styles.registerLink}
                    onPress={() => {
                        pushTo('Signup')
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
        fontSize: moderateScale(24),
        fontWeight: '400',
        paddingBottom: 40,
        textAlign: 'center',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },
    subtitle: {
        fontSize: moderateScale(12),
        fontWeight: '400',
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
        fontSize: moderateScale(24),
        fontWeight: '400',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        paddingBottom: 8,
        color: '#333',
    },
    registerLink: {
        color: Colors.blue0A1C26,
        fontWeight: '700',
        fontSize: moderateScale(14),
        textDecorationLine: 'underline',
        marginBottom: 20,
    },
});

export default Login;