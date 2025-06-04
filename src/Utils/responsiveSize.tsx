import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const { width, height, } = Dimensions.get('window');

const pxl = PixelRatio.get()
const moderateScaleVertical = (size: number, factor = 0.5) => size + (verticalScale(size) - size) * factor;
console.log('getPixelSizeForLayoutSize :-- ', pxl);
const horizMutipier = (sz: number) => width * sz
const verticMutipier = (sz: number) => height * sz

const textScale = (size: number): number => RFValue(size)

export { scale, verticalScale, textScale, moderateScale, moderateScaleVertical, width, height, horizMutipier, verticMutipier, widthPercentageToDP, heightPercentageToDP };