import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../constants/common';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import SvgAuthLogo from '../assets/images/auth_logo.svg'; // Ensure this path is correct
import LeftArrow from '../assets/images/left_arrow.svg';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';

// Ensure this path is correct

// Replace 'Login' with the actual screen name for this component as defined in your RootStackParamList
type Props = NativeStackScreenProps<RootStackParamList, 'CreatePassword'>;

function CreatePassword({ navigation }: Props): React.JSX.Element {

    return (
        <LinearGradient
            colors={[Colors.gradientStart, Colors.gradientEnd]}
            style={styles.container}
        >
            <SafeAreaView style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <LeftArrow width={40} height={40} />
                </TouchableOpacity>
            </SafeAreaView>

            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <SafeAreaView>

                    <SvgAuthLogo style={{ alignSelf: 'center', marginBottom: 32 }} />
                    <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.create_password)}</Text>
                    <View style={{ paddingTop: 20 }} />
                    <Text style={styles.subtitle}>{i18n.t(TRANSLATION_KEYS.must_contain)}</Text>
                    <View style={{ paddingHorizontal: 50 }}>
                        <CustomTextInput
                            placeholder={i18n.t(TRANSLATION_KEYS.new_password)}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                        <CustomTextInput
                            placeholder={i18n.t(TRANSLATION_KEYS.confirm_password)}
                            secureTextEntry
                            autoCapitalize="none"
                        />

                        <CustomButton
                            title={i18n.t(TRANSLATION_KEYS.next)}
                            onPress={() => {
                                console.log('Next pressed');
                                navigation.navigate('CreateUsername'); // Navigate to the CreateUsername screen
                            }}
                            style={{ marginTop: 20, backgroundColor: Colors.blue0A1C26 }}
                            textStyle={{ fontSize: 18, fontWeight: '600' }}
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
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 40,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        paddingBottom: 20,
        fontFamily: FONT_FAMILY_GOTHIC_A1,
    },

});

export default CreatePassword;