var calculatePriceV2 = require('../api/v2/calculate-price');

if (inputs.type && (inputs.type !== 'bank_account' && inputs.type !== 'card')) {
  return exits.error({ description: 'type must be `bank_account` or `card`' });
}

if (inputs.type === 'bank_account') {
  if (!inputs.capAmount || isNaN(parseFloat(inputs.capAmount))) {
    return exits.error({ description: 'capAmount is require and must be a number' });
  }
  else {
    return calculatePriceV2.bank(inputs, exits);
  }
}
else {
  return calculatePriceV2.card(inputs, exits);
}