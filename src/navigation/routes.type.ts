
// MARK:- Auth Stack 
export type AuthRouteParamList = {
    Login: undefined;
    Signup: undefined;
    OtpVerification: undefined;
    CreatePassword: undefined;
    CreateUsername: undefined;
    AddVehicleScreen: undefined;
    VehicleRegisterConfirmation: undefined; // Assuming this is a screen you might have
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
