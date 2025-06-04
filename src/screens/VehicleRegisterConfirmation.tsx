import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constants/colors';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';
import CustomButton from '../components/CustomButton';
import CorssIcon from '../assets/images/corss_icon.svg';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';



const VehicleRegisterConfirmation = ({
  vehicle = { brand: 'Audi Q5', color: 'Gris metalizado', plate: '1234ZYW', tag: 'ECO' },
  onClose = () => {},
  onConfirm = () => {},
}) => {
  return (
    <LinearGradient colors={[Colors.gradientStart, Colors.gradientEnd]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <CorssIcon width={28} height={28} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.vehicle_register_confirm_question)}</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{i18n.t(TRANSLATION_KEYS.add_vehicle_step1_title)}</Text>
            <Text style={styles.cardText}>{vehicle.brand}</Text>
            <Text style={styles.cardText}>{vehicle.color}</Text>
            <Text style={styles.cardText}>{vehicle.plate}</Text>
            <Text style={styles.cardText}>{vehicle.tag}</Text>
          </View>
          <CustomButton
            title={i18n.t(TRANSLATION_KEYS.Confirm)}
            onPress={onConfirm}
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
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  card: {
    backgroundColor: '#0A1C26',
    borderRadius: 28,
    paddingVertical: 24,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
    maxWidth: 320,
  },
  cardTitle: {
    color: Colors.textSecondary,
    fontSize: 16,
    marginBottom: 33,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  cardText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 33,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#4be37a',
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 10,
    marginBottom: 12,
    minWidth: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  confirmButtonText: {
    color: '#0A1C26',
    fontWeight: '700',
    fontSize: 18,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  infoText: {
    color: Colors.textSecondary,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
});

export default VehicleRegisterConfirmation;
