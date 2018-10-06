const express = require('express');
const app = express();
const port = 3000;

const unitReference = require('./unitReference');

const siUnit = widelyUsedUnit => {
  return unitReference.find(
    u =>
      u.name == widelyUsedUnit ||
      u.symbol == widelyUsedUnit ||
      u.siSymbol == widelyUsedUnit,
  );
};

const intoSi = (widelyUsedUnit, type) => {
  let match = siUnit(widelyUsedUnit);
  if (match && type == 'siAmount' && match['siSymbol'] == widelyUsedUnit) {
    return 1;
  } else {
    return match ? match[type] : widelyUsedUnit;
  }
};

const splitInput = units => {
  return units.split(/([\(\)\*\/]|[\w\°\"\']+)/g).filter(x => x.length);
};

const ConvertUnits = units => {
  let split = splitInput(units);
  let unit_name = split.map(u => intoSi(u, 'siSymbol')).join('');
  let factored = split.map(u => intoSi(u, 'siAmount')).join('');

  return {
    unit_name,
    multiplication_factor: Number(eval(factored).toFixed(14)),
  };
};

app.get('/units/si', (req, res) => {
  if (req.query.units) {
    let conversion = ConvertUnits(req.query.units);
    res.send(conversion);
  } else {
    res.send("'units' parameter is required.");
  }
});

app.listen(port, () =>
  console.log(`Convert to SI app listening on port: ${port}`),
);
