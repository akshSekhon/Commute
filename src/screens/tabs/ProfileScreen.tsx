import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import Colors from '../../constants/colors';
import RateAppIcon from '../../assets/images/profiles/option_opinion.svg';
import TermsIcon from '../../assets/images/profiles/option_personal_info.svg';
import PrivacyIcon from '../../assets/images/profiles/option_verify.svg';
import i18n, { TRANSLATION_KEYS } from '../../constants/localization/localization';
import LinearGradient from 'react-native-linear-gradient';
import PersonalInfoIcon from '../../assets/images/profiles/option_personal_info.svg';
import VehicleIcon from '../../assets/images/profiles/option_vehicle.svg';
import VerifyIcon from '../../assets/images/profiles/option_verify.svg';
import OpinionIcon from '../../assets/images/profiles/option_opinion.svg';
import PaymentsIcon from '../../assets/images/profiles/option_payment_management.svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { moderateScale } from 'react-native-size-matters';
import { pushTo } from '../../navigation/NavigationService';



const ProfileScreen: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {

  // Dummy user data
  const user = {
    name: 'Rodriguín',
    joinDate: 'enero 2024',
    avatar: 'https://ui-avatars.com/api/?name=Rodriguin&background=cccccc&color=222222&size=128',
  };

  return (
    <LinearGradient
      colors={[Colors.gradientStart, Colors.gradientEnd]}
      style={styles.parent}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View style={styles.header}>
            <Text style={styles.name}>{user.name}</Text>
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
            </View>
            <Text style={styles.joinDate}>User since January 2024</Text>
          </View>
          <View style={styles.menu}>
            {[
              { icon: PersonalInfoIcon, label: i18n.t(TRANSLATION_KEYS.profile_personal_info) },
              { icon: VehicleIcon, label: i18n.t(TRANSLATION_KEYS.profile_vehicle) },
              { icon: VerifyIcon, label: i18n.t(TRANSLATION_KEYS.profile_verify) },
              { icon: OpinionIcon, label: i18n.t(TRANSLATION_KEYS.profile_opinions) },
              { icon: PaymentsIcon, label: i18n.t(TRANSLATION_KEYS.profile_payments_management) },
            ].map((item, idx) => (
              <MenuItem key={item.label} icon={item.icon} label={item.label} index={idx} />
            ))}
          </View>
          <TouchableOpacity style={styles.link} onPress={() => navigation.replace('Login')}>
            <Text style={styles.linkText}>{i18n.t(TRANSLATION_KEYS.profile_close_session)}</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const MenuItem = ({ icon: Icon, label, index }: { icon: any; label: string, index: number }) => (
  <TouchableOpacity onPress={() => {
    if (index === 0) {
      // Navigate to Personal Information
      pushTo('PersonalInformation');
    }
    else if (index === 1) {
      // Navigate to Vehicle Information
      pushTo('AddVehicleScreen');
    }
    else if (index === 2) {
      // Navigate to Verification
      pushTo('VerificationScreen');

    }
    else if (index === 3) {
      pushTo('VerifyEmailTelephone');
    }


  }}>
    <View style={styles.menuItem}>
      <View style={styles.menuIconLabel}>
        <Icon width={40} height={40} style={styles.menuImageIcon} />
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      {/* <Image source={ChevronRightIcon} style={styles.menuChevronIcon} /> */}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 16,
  },
  name: {
    fontSize: moderateScale(24),
    fontWeight: '400',
    marginBottom: moderateScale(14),
    color: Colors.blue0A1C26,
  },
  avatarWrapper: {
    borderWidth: 3,
    borderColor: Colors.green16EB84,
    borderRadius: moderateScale(55),
    marginBottom: moderateScale(8),

  },
  avatar: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(45),
  },
  joinDate: {
    color: Colors.textSecondary,
    fontSize: moderateScale(16),
    fontWeight: '400',
    fontFamily: 'GothicA1',
  },
  menu: {
    borderRadius: 4,
    marginHorizontal: 0,
    marginBottom: 8,
    paddingVertical: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)', // #e6ecf0 with 50% opacity

  },
  menuIconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  menuLabel: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    fontFamily: 'GothicA1',
    color: Colors.blue0A1C26,
  },
  link: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  linkText: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: Colors.textPrimary,
    textDecorationLine: 'underline',
  },
  menuImageIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    resizeMode: 'contain',
  },
  menuChevronIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
