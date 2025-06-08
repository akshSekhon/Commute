
// MARK:- Auth Stack 
export type AuthRouteParamList = {
    Login: undefined;
    Signup: undefined;
    OtpVerification: undefined;
    CreatePassword: undefined;
    CreateUsername: undefined;
    AddVehicleScreen: undefined;
    VehicleRegisterConfirmation: undefined;
    PersonalInformation:undefined; 
    VerificationScreen:undefined;
    VerifyEmailTelephone: undefined;
    VerifyOtpEmailTelephone: undefined;
}


export type MainStackRoutes = {

}

export type MainStackRouteParams = MainStackRoutes

// MARK:- Route Stack 
export type RouteStackParams = {
    // SplashScreen: undefined
    // authStack: undefined,
    // mainStack: undefined
    MainTabs: undefined;

};

// MARK:- All Screens
export type RouteParamList = RouteStackParams & MainStackRouteParams & AuthRouteParamList 
