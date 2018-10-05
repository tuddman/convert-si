const PI = 3.14159265358979;
const DEGREE = (PI / 180).toFixed(14);
const ARCMINUTE = (PI / 10800).toFixed(14);
const ARCSECOND = (PI / 648000).toFixed(14);

module.exports = [
  {
    name: 'minute',
    symbol: 'min',
    quantity: 'time',
    siAmount: 60,
    siSymbol: 's',
  },
  {
    name: 'hour',
    symbol: 'h',
    quantity: 'time',
    siAmount: 3600,
    siSymbol: 's',
  },
  {
    name: 'day',
    symbol: 'd',
    quantity: 'time',
    siAmount: 86400,
    siSymbol: 's',
  },
  {
    name: 'degree',
    symbol: '°',
    quantity: 'unitless/plane angle',
    siAmount: DEGREE,
    siSymbol: 'rad',
  },
  {
    name: 'arcminute',
    symbol: 'min',
    quantity: 'unitless/plane angle',
    siAmount: ARCMINUTE,
    siSymbol: 'rad',
  },
  {
    name: 'arcsecond',
    symbol: 'min',
    quantity: 'unitless/plane angle',
    siAmount: ARCSECOND,
    siSymbol: 'rad',
  },
  {
    name: 'hectare',
    symbol: 'ha',
    quantity: 'area',
    siAmount: 10000,
    siSymbol: 'm^2',
  },
  {
    name: 'litre',
    symbol: 'L',
    quantity: 'volume',
    siAmount: 0.001,
    siSymbol: 'm^3',
  },
  {
    name: 'tonne',
    symbol: 't',
    quantity: 'mass',
    siAmount: 1000,
    siSymbol: 'kg',
  },
];
