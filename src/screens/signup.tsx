import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SvgAuthLogo from '../assets/images/auth_logo.svg';
import LeftArrow from '../assets/images/left_arrow.svg';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { Colors } from '../constants/common';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { goBack, pushTo } from '../navigation/NavigationService';
import { moderateScale } from 'react-native-size-matters';



function Signup() {
    return (
        <LinearGradient
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            style={styles.container}
        >
            <SafeAreaView style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <LeftArrow width={40} height={40} />
                </TouchableOpacity>
            </SafeAreaView>
            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <SafeAreaView>
                    <SvgAuthLogo style={{ alignSelf: 'center', marginBottom: 32 }} />
                    <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.welcome)}</Text>
                    <View style={{ paddingTop: 20 }} />
                    <Text style={styles.subtitle}>{i18n.t(TRANSLATION_KEYS.enter_email)}</Text>
                    <View style={{ paddingTop: 10 }} />
                    <View style={{ paddingHorizontal: 50 }}>
                        <CustomTextInput
                            placeholder={i18n.t(TRANSLATION_KEYS.email)}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <CustomButton
                            title={i18n.t(TRANSLATION_KEYS.next)}
                            onPress={() => {
                                console.log('Next pressed');
                                pushTo('OtpVerification')
                                // navigation.navigate('OtpVerification'); // Navigate to the OtpVerification screen
                            }}
                            style={{ marginTop: 20, backgroundColor: Colors.blue0A1C26 }}
                            textStyle={{ fontSize: 18, fontWeight: '600' }}
                        />

                        <CustomButton
                            title={i18n.t(TRANSLATION_KEYS.register_with_phone)}
                            onPress={() => console.log('Login pressed')}
                            style={{ borderColor: Colors.blue0A1C26, backgroundColor: 'transparent', borderWidth: 1 }}
                            textStyle={{ fontSize: moderateScale(16), fontWeight: '700', color: Colors.blue0A1C26 }}
                        />

                    </View>

                </SafeAreaView>
            </ScrollView>



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
        textAlign: 'center',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },
    subtitle: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#666',
        textAlign: 'center',
        paddingBottom: 20,
        paddingHorizontal: 40,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },

});

export default Signup;