#!/usr/bin/env node

import colors from 'colors';

console.log([
  '',
  'Usage:',
  '',
  '    ' + colors.green.bold('npx iconfont-init-fix-dw [--output]') + '     : Generate configuration file, default file name is iconfont.json',
  '    ' + colors.green.bold('npx iconfont-taro-fix-dw [--config]') + '     : Generate icon component',
  '',
].join('\n'));
