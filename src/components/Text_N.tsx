//import liraries
import React, { FC, memo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { textScale } from '../Utils/responsiveSize';
import { Colors } from '../constants/common';
import { FONT_FAMILY_GOTHIC_A1 } from '../constants/fonts';
// create a component
interface props extends TextProps {
    children?: React.ReactNode;
    color?: string;
}
const Text_N: FC<props> = memo(({ children, color, style, ...props }) => {
    // const { lang, colors, textStyles, comnViewStyles } = getStyles(ThemeContext);
    return (<Text style={[{ ...styles.text, color: color ?? Colors.textPrimary, includeFontPadding: false }, style]} {...props}>{children}</Text>);
});

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    text: {
        fontSize: textScale(13),
        fontFamily: FONT_FAMILY_GOTHIC_A1,
        // textAlign: 'center',
    },
});

//make this component available to the app
export default Text_N;