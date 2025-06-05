import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { OtpInput } from "react-native-otp-entry";
import SvgAuthLogo from '../assets/images/auth_logo.svg';
import LeftArrow from '../assets/images/left_arrow.svg';
import CustomButton from '../components/CustomButton';
import { Colors } from '../constants/common';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { goBack, pushTo } from '../navigation/NavigationService';
import { moderateScale } from 'react-native-size-matters';


function OtpVerification() {
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


                    <Text style={styles.subtitle}>{i18n.t(TRANSLATION_KEYS.otp_instruction)}</Text>
                    <View style={{ paddingTop: 30 }} />
                    <View style={{ paddingHorizontal: 50 }}>
                        <OtpInput numberOfDigits={5} onTextChange={(text) => console.log(text)} theme={{
                            pinCodeTextStyle: {
                                borderRadius: 12,
                                backgroundColor: 'transparent',
                                
                            },
                            focusedPinCodeContainerStyle: {
                                borderRadius: 12,
                                backgroundColor: '#fff',
                                borderColor: Colors.blue0A1C26,
                               
                            },
                            pinCodeContainerStyle: {
                                borderRadius: 12,
                                backgroundColor: '#fff',
                                height: 48,
                                width: 48,
                              
                            },
                        }} />
                        <CustomButton
                            title={i18n.t(TRANSLATION_KEYS.next)}
                            onPress={() => {
                                console.log('Next pressed');
                                // navigation.navigate('CreatePassword');
                                pushTo('CreatePassword')
                            }}
                            style={{ marginTop: 20, backgroundColor: Colors.blue0A1C26 }}
                            textStyle={{ fontSize: moderateScale(16), fontWeight: '700' }}
                        />
                        <View style={{ paddingTop: 20 }} />
                        <Text style={styles.resentCode}>{i18n.t(TRANSLATION_KEYS.resend_code)}</Text>

                    </View>

                </SafeAreaView>
            </ScrollView>
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
        textAlign: 'center',
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
    resentCode: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: Colors.blue0A1C26,
        textDecorationLine: 'underline',
    }

});

export default OtpVerification;