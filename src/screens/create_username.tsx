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
import { goBack } from '../navigation/NavigationService';
import { moderateScale } from 'react-native-size-matters';

// Ensure this path is correct

// Replace 'Login' with the actual screen name for this component as defined in your RootStackParamList

function CreateUsername() {

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
                    <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.choose_username)}</Text>
                    <View style={{ paddingTop: 20 }} />
                    <Text style={styles.subtitle}>{i18n.t(TRANSLATION_KEYS.username_info)}</Text>
                    <View style={{ paddingHorizontal: 50 }}>
                        <CustomTextInput
                            placeholder={i18n.t(TRANSLATION_KEYS.username)}
                            autoCapitalize="none"
                        />


                        <CustomButton
                            title={i18n.t(TRANSLATION_KEYS.finish)}
                            onPress={() => {

                            }}
                            style={{ marginTop: 20, backgroundColor: Colors.blue0A1C26 }}
                            textStyle={{ fontSize: moderateScale(16), fontWeight: '700' }}
                        />

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
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },

});

export default CreateUsername;