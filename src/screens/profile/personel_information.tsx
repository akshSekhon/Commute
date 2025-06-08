import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomTextInput from '../../components/CustomTextInput';
import Colors from '../../constants/colors';
import { FONT_FAMILY_GOTHIC_A1 } from '../../constants/fonts';
import i18n, { TRANSLATION_KEYS } from '../../constants/localization/localization';
import { goBack, pushTo } from '../../navigation/NavigationService';
import { moderateScale } from 'react-native-size-matters';
import CorssIcon from '../../assets/images/corss_icon.svg';
import CustomButton from '../../components/CustomButton';

const PersonalInformation = () => {
    // State for form fields (optional, for controlled inputs)

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    return (
        <LinearGradient colors={[Colors.gradientStart, Colors.gradientEnd]} style={styles.container}>
            <SafeAreaView style={{ position: 'absolute', top: 20, left: 20, right: 20, zIndex: 1 }}>
                <TouchableOpacity onPress={() => goBack()} style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>

                    <CorssIcon width={28} height={28} />

                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    style={{ flex: 1, width: '100%' }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.card}>
                        <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.profile_personal_info)}</Text>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.name)}</Text>
                            <CustomTextInput

                                value={name}
                                onChangeText={setName}
                                style={styles.input}
                            />
                            <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.last_name)}</Text>
                            <CustomTextInput

                                value={lastName}
                                onChangeText={setLastName}
                                style={styles.input}
                            />
                            <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.birth_date)}</Text>
                            <CustomTextInput

                                value={birthdate}
                                onChangeText={setBirthdate}
                                style={styles.input}
                            />
                            <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.email)}</Text>
                            <CustomTextInput

                                value={email}
                                onChangeText={setEmail}
                                style={styles.input}
                            />
                            <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.phone_number)}</Text>
                            <CustomTextInput
                                value={phone}
                                onChangeText={setPhone}
                                style={styles.input}
                            />
                            <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.additional_info)}</Text>
                            <CustomTextInput
                                value={additionalInfo}
                                onChangeText={setAdditionalInfo}
                                style={styles.input}
                            />
                            <CustomButton
                                title={i18n.t(TRANSLATION_KEYS.keep)}
                                onPress={() => {
                                    
                                }}
                                style={styles.button}
                                textStyle={styles.buttonText}
                            />

                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        alignItems: 'center',

    },
    headerApp: {
        color: '#2A7BE4',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 8,
    },
    card: {
        alignSelf: 'center',
        paddingTop: 20,
        width: '100%',
        paddingHorizontal: 40,
        flex: 1,

    },
    title: {
        fontSize: moderateScale(24),
        fontWeight: '700',
        color: Colors.blue0A1C26,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        marginTop: 40,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: moderateScale(14),
        fontWeight: '400',
        color: Colors.blue0A1C26,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        marginTop: 24,
        marginBottom: 18,
        textAlign: 'center',
    },
    formGroup: {
        flex: 1,
        marginBottom: 18,
        marginTop: 40,

    },
    label: {
        fontSize: moderateScale(12),
        fontWeight: '600',
        color: Colors.textSecondary,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        marginBottom: 4,
        marginTop: 10,
    },
    dropDownContainer: {
        borderColor: Colors.gradientEnd,
    },
    droDownInput: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        paddingHorizontal: 5,
    },
    input: {
        marginBottom: 4,
        height: 48,
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: moderateScale(16),
        fontWeight: '400',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },

    button: {
        backgroundColor: 'rgba(10,28,38,0.7)', // Replace with the correct RGBA value for blue0A1C26
        borderRadius: 24,
        marginTop: 10,
        marginBottom: 8,
        paddingVertical: 12,
    },
    buttonText: {
        fontSize: moderateScale(16),
        fontWeight: '400',
        color: Colors.white,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },
    laterBtn: {
        alignItems: 'center',
        marginTop: 8,
    },
    laterText: {
        color: Colors.blue0A1C26,
        fontSize: moderateScale(14),
        fontWeight: '700',
        textDecorationLine: 'underline',
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        marginBottom: 20,
    },
});

export default PersonalInformation;
