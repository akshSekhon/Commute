import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../constants/colors';
import i18n, { TRANSLATION_KEYS } from '../../constants/localization/localization';
import { FONT_FAMILY_GOTHIC_A1 } from '../../constants/fonts';
import CustomButton from '../../components/CustomButton';
import PostIcon from '../../assets/images/tab/tab_post_selected.svg';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

const PostScreen:React.FC<{ navigation: any,route:any }> = ({ navigation,route }) => {
  

  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <PostIcon width={moderateScale(150)} height={moderateScale(150)} style={styles.icon} />
          <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.post_not_driver)}</Text>
          <Text style={styles.description}>{i18n.t(TRANSLATION_KEYS.post_driver_instruction)}</Text>
          <CustomButton
            title={i18n.t(TRANSLATION_KEYS.post_become_driver)}
            onPress={() => {
              navigation.navigate('AddVehicleScreen');
            }}
            style={styles.button}
            textStyle={{ fontSize: moderateScale(20), fontWeight: '700' }}
          />
             <Text style={styles.steps}>{i18n.t(TRANSLATION_KEYS.steps_message)}</Text>
        </View>
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
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  icon: {
    marginBottom: 40,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: Colors.blue0A1C26,
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  description: {
    fontSize: moderateScale(20),
    fontWeight: '400',
    color: Colors.blue0A1C26,
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    lineHeight: 24,
  },
  button: {
    width: '100%',
    backgroundColor: Colors.blue0A1C26,
    marginBottom: 50,
  },
  steps: {
    fontSize: moderateScale(14),
    fontWeight: '400',
    color: Colors.blue0A1C26,
  },
});

export default PostScreen;
