import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import DropDownPicker from 'react-native-dropdown-picker';
import LeftArrow from '../assets/images/left_arrow.svg';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import Colors from '../constants/colors';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';
import i18n, { TRANSLATION_KEYS } from '../constants/localization/localization';
import { goBack, pushTo } from '../navigation/NavigationService';

const AddVehicleScreen = () => {
  // State for form fields (optional, for controlled inputs)


  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [tag, setTag] = useState('');

  const [brand, setBrand] = useState('');
  const [openBrand, setOpenBrand] = useState(false);
  const [itemsBrand, setItemsBrand] = useState(
    [
      { label: 'Alpha Romeo', value: 'Alpha' },
      { label: 'Honda', value: 'honda' },
      { label: 'Ford', value: 'ford' },
      { label: 'Chevrolet', value: 'chevrolet' },
      { label: 'Nissan', value: 'nissan' },
    ]
  );

  const [model, setModel] = useState('');
  const [openModel, setOpenModel] = useState(false);
  const [itemsModel, setItemsModel] = useState(
    [
      { label: 'A1', value: 'A1' },
      { label: 'A2', value: 'A2' },
      { label: 'A3', value: 'A3' },
      { label: 'A4', value: 'A4' },
      { label: 'A5', value: 'A5' },
    ]

  );

  const [openTag, setOpenTag] = useState(false);
  const [itemsTag, setItemsTag] = useState(
    [
      { label: 'Tag1', value: 'tag1' },
      { label: 'Tag2', value: 'tag2' },
      { label: 'Tag3', value: 'tag3' },
      { label: 'Tag4', value: 'tag4' },
      { label: 'Tag5', value: 'tag5' },
    ]
  );

  return (
    <LinearGradient colors={[Colors.gradientStart, Colors.gradientEnd]} style={styles.container}>
      <SafeAreaView style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <TouchableOpacity onPress={() => goBack()} style={{ width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
          <LeftArrow width={40} height={40} />
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.title}>{i18n.t(TRANSLATION_KEYS.add_vehicle_step1_title)}</Text>
            <Text style={styles.subtitle}>{i18n.t(TRANSLATION_KEYS.add_vehicle_step1_subtitle)}</Text>
            <View style={styles.formGroup}>
              <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.vehicle_brand)}</Text>
              <View style={{ zIndex: openBrand ? 2000 : 1000, elevation: openBrand ? 10 : 1 }}>
                <DropDownPicker
                  style={styles.input}
                  placeholder={i18n.t(TRANSLATION_KEYS.select_brand)}
                  open={openBrand}
                  value={brand}
                  items={itemsBrand}
                  setOpen={(val) => {
                    const isOpen = typeof val === 'function' ? val(openBrand) : val;
                    setOpenBrand(val);
                    if (isOpen === true) setOpenModel(false);
                  }}
                  setValue={setBrand}
                  setItems={setItemsBrand}
                  listMode="SCROLLVIEW"
                />
              </View>
              <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.vehicle_model)}</Text>
              <View style={{ zIndex: openModel ? 2000 : 1000, elevation: openModel ? 10 : 1 }}>
                <DropDownPicker
                  style={styles.input}
                  placeholder={i18n.t(TRANSLATION_KEYS.select_brand)}
                  open={openModel}
                  value={model}
                  items={itemsModel}
                  setOpen={(val) => {
                    const isOpen = typeof val === 'function' ? val(openModel) : val;
                    setOpenModel(val);
                    if (isOpen === true) setOpenBrand(false);
                  }}
                  setValue={setModel}
                  setItems={setItemsModel}
                  listMode="SCROLLVIEW"
                />
              </View>
              <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.vehicle_color)}</Text>
              <CustomTextInput
                placeholder={i18n.t(TRANSLATION_KEYS.enter_color)}
                value={color}
                onChangeText={setColor}
                style={styles.input}
              />
              <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.vehicle_plate)}</Text>
              <CustomTextInput
                placeholder={i18n.t(TRANSLATION_KEYS.enter_plate)}
                value={plate}
                onChangeText={setPlate}
                style={styles.input}
              />
              <Text style={styles.label}>{i18n.t(TRANSLATION_KEYS.vehicle_tag)}</Text>
              <View style={{ zIndex: openTag ? 2000 : 1000, elevation: openTag ? 10 : 1 }}>
                <DropDownPicker
                  style={styles.input}
                  placeholder={i18n.t(TRANSLATION_KEYS.select_tag)}
                  open={openTag}
                  value={tag}
                  items={itemsTag}
                  setOpen={(val) => {
                    const isOpen = typeof val === 'function' ? val(openTag) : val;
                    setOpenTag(val);
                    if (isOpen === true) {
                      setOpenBrand(false);
                      setOpenModel(false);
                    }
                  }}
                  setValue={setTag}
                  setItems={setItemsTag}
                  listMode="SCROLLVIEW"
                />
              </View>
            </View>
            <CustomButton
              title={i18n.t(TRANSLATION_KEYS.next)}
              onPress={() => {
                // navigation.navigate('VehicleRegisterConfirmation');
                pushTo('VehicleRegisterConfirmation')
              }}
              style={styles.button}
              textStyle={styles.buttonText}
            />
            <TouchableOpacity style={styles.laterBtn}>
              <Text style={styles.laterText}>{i18n.t(TRANSLATION_KEYS.add_vehicle_later)}</Text>
            </TouchableOpacity>
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
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textPrimary,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    marginTop: 40,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    marginTop: 24,
    marginBottom: 18,
    textAlign: 'left',
  },
  formGroup: {
    marginBottom: 18,

  },
  label: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    marginBottom: 4,
    marginTop: 10,
  },
  input: {
    marginBottom: 4,
    height: 48,
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    borderColor: Colors.gradientEnd,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    color: Colors.blue0A1C26,
  },
  dropDownPlaceholder: {
    color: '#999',
    fontSize: 16,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  button: {
    backgroundColor: '#495057',
    borderRadius: 24,
    marginTop: 10,
    marginBottom: 8,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: FONT_FAMILY_GOTHIC_A1,
  },
  laterBtn: {
    alignItems: 'center',
    marginTop: 8,
  },
  laterText: {
    color: Colors.textSecondary,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: FONT_FAMILY_GOTHIC_A1,
    marginBottom: 20,
  },
});

export default AddVehicleScreen;
