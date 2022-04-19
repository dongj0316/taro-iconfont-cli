/* eslint-disable */

import React from 'react';
import Icon from './h5';

const pxTransform = function (size, designWidth = 750) {
  return Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 10000) / 10000 + 'rem';
};
const IconFont = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(pxTransform(size, 720))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 14,
};

export default IconFont;
