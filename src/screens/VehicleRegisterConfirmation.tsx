import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';
import CustomButton from '../components/CustomButton';
import CorssIcon from '../assets/images/corss_icon.svg';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { goBack } from '../navigation/NavigationService';
import { moderateScale } from 'react-native-size-matters';

const VehicleRegisterConfirmation = ({
  vehicle = { brand: 'Audi Q5', color: 'Gris metalizado', plate: '1234ZYW', tag: 'ECO' },

}) => {
  return (
    <LinearGradient colors={[Colors.gradientStart, Colors.gradientEnd]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.closeIcon} onPress={() => {
          // Handle close action, e.g., go back to the previous screen
          goBack();
        }}>
          <CorssIcon width={28} height={28} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.vehicle_register_confirm_question)}</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Nuevo vehículo</Text>
            <Text style={styles.cardText}>{vehicle.brand}</Text>
            <Text style={styles.cardText}>{vehicle.color}</Text>
            <Text style={styles.cardText}>{vehicle.plate}</Text>
            <Text style={styles.cardText}>{vehicle.tag}</Text>
          </View>
          <CustomButton
            title={i18n.t(TRANSLATION_KEYS.Confirm)}
            onPress={() => {
              // Handle confirmation action, e.g., submit the vehicle registration
              console.log('Vehicle registration confirmed');
            }
            }
            style={styles.confirmButton}
            textStyle={styles.confirmButtonText}
          />
          <Text style={styles.infoText}>
            {i18n.t(TRANSLATION_KEYS.vehicle_register_confirm_info)}
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  closeIcon: {
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 20,
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    // paddingTop: 60,
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    color: Colors.blue0A1C26,
    textAlign: 'center',
    marginBottom: moderateScale(40),
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  card: {
    backgroundColor: '#0A1C26',
    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  cardTitle: {
    color: Colors.white,
    fontSize: moderateScale(20),
    fontWeight: '400',
    marginBottom: 33,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  cardText: {
    color: '#fff',
    fontSize: moderateScale(26),
    fontWeight: '700',
    marginBottom: moderateScale(33),
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: Colors.green16EB84,
    borderRadius: 50,
    minWidth: 160,
    marginTop: moderateScale(-25),
  },
  confirmButtonText: {
    color: Colors.blue0A1C26,
    fontWeight: '700',
    fontSize: moderateScale(22),
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  infoText: {
    color: Colors.textSecondary,
    fontSize: moderateScale(12),
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginTop: 40,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
});

export default VehicleRegisterConfirmation;
