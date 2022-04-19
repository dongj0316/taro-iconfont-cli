/* eslint-disable */

import React from 'react';

const pxTransform = function (size) {
  return parseInt(size, 10) + 'rpx';
};
const IconFont = (props) => {
  const { name, size, color, style } = props;

  return <iconfont name={name} size={parseFloat(pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 14,
};

export default IconFont;
