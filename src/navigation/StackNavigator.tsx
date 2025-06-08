import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/signup';
import OtpVerification from '../screens/otp_verification';
import CreatePassword from '../screens/create_password';
import CreateUsername from '../screens/create_username';
import MainTabs from '../screens/tabs/MainTabs';
import AddVehicleScreen from '../screens/addvehicle';
import VehicleRegisterConfirmation from '../screens/VehicleRegisterConfirmation';
import { RouteParamList, RouteStackParams } from './routes.type';
import PersonalInformation from '../screens/profile/personel_information';
import VerificationScreen from '../screens/profile/VerificationScreen';
import VerifyEmailTelephone from '../screens/profile/verify_email_telephone';
import VerifyOtpEmailTelephone from '../screens/profile/verify_otp_email_telephone';

// export type RootStackParamList = {

// };

const Stack = createNativeStackNavigator<RouteParamList>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="MainTabs" component={MainTabs} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="OtpVerification" component={OtpVerification} />
    <Stack.Screen name="CreatePassword" component={CreatePassword} />
    <Stack.Screen name="CreateUsername" component={CreateUsername} />
    <Stack.Screen name="AddVehicleScreen" component={AddVehicleScreen} />
    <Stack.Screen name="VehicleRegisterConfirmation" component={VehicleRegisterConfirmation} />
    <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
    <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
    <Stack.Screen name="VerifyEmailTelephone" component={VerifyEmailTelephone} />
    <Stack.Screen name="VerifyOtpEmailTelephone" component={VerifyOtpEmailTelephone} />




  </Stack.Navigator>
);

export default AppNavigator;
