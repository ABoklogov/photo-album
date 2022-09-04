import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from 'res/vars.js';

export default AddAvatar = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M20 12H4" stroke={colors.black} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
      <Path d="M10 18L4 12L10 6" stroke={colors.black} stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  )
};
