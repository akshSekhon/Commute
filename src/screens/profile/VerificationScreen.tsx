// src/screens/VerificationScreen.tsx
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Pressable, SafeAreaView } from 'react-native';
import { Colors } from '../../constants/common';
import { FONT_FAMILY_GOTHIC_A1 } from '../../constants/fonts';
import Text_N from '../../components/Text_N';
import CustomButton from '../../components/CustomButton';
import CameraIcon from '../../assets/images/camera_verification.svg';
import CrossIcon from '../../assets/images/corss_icon.svg';
import LinearGradient from 'react-native-linear-gradient';
import { goBack } from '../../navigation/NavigationService';
import { moderateScale } from 'react-native-size-matters';
import i18n, { TRANSLATION_KEYS } from '../../constants/localization/localization';

const VerificationScreen = () => {
    return (
        <LinearGradient colors={[Colors.gradientStart, Colors.gradientEnd]} style={styles.container}>
            <SafeAreaView style={{ position: 'absolute', top: 20, left: 20, right: 20, zIndex: 1 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <CrossIcon width={28} height={28} />
                </TouchableOpacity>

                <Text_N style={styles.title}> {i18n.t(TRANSLATION_KEYS.verify_driver)} </Text_N>
                <Text_N style={styles.subtitle}>
                    {i18n.t(TRANSLATION_KEYS.upload_driver_both_side_license)}
                </Text_N>
                <Text_N style={styles.label}>
                    {i18n.t(TRANSLATION_KEYS.front_side)}
                </Text_N>
                <TouchableOpacity style={styles.uploadBox}>
                    <CameraIcon style={styles.cameraIcon} />
                </TouchableOpacity>
                <Text_N style={styles.label}>
                    {i18n.t(TRANSLATION_KEYS.back_side)}
                </Text_N>
                <TouchableOpacity style={styles.uploadBox}>
                    <CameraIcon style={styles.cameraIcon} />
                </TouchableOpacity>
                <CustomButton style={styles.button} title= {i18n.t(TRANSLATION_KEYS.send)} onPress={() => {
                    // Handle the submit action here
                    // };
                }}
                    textStyle={styles.buttonText } />
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },

    title: {
        fontSize: moderateScale(24),
        fontWeight: '700',
        color: Colors.blue0A1C26,
        marginBottom: moderateScale(40),
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        textAlign: 'center',
        marginTop: 24,
    },
    subtitle: {
        fontSize: moderateScale(14),
        fontWeight: '400',
        color: Colors.blue0A1C26,
        marginBottom: moderateScale(24),
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        textAlign: 'center',
        paddingHorizontal: moderateScale(20),
    },
    label: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        color: Colors.blue0A1C26,
        marginTop: moderateScale(40),
        marginBottom: moderateScale(18),
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        alignSelf: 'center',
        textAlign: 'left',

    },
    uploadBox: {
        width: moderateScale(210),
        height: moderateScale(130),
        borderRadius: moderateScale(30),
        borderWidth: 2,
        borderColor: Colors.blue0A1C26,
        backgroundColor: Colors.redD9D9D9,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(20),
        alignSelf: 'center',

    },
    cameraIcon: {
        width: 48,
        height: 48,
        tintColor: '#B0B8BE',
    },
    button: {
        marginTop: 16,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: Colors.blue0A1C26Alpha70,
    },
    buttonText: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        color: Colors.white,
    },
});

export default VerificationScreen;
