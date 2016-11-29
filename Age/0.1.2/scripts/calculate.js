var dateOfBirth = inputs.dateOfBirth;

if (typeof dateOfBirth === 'string') {
  dateOfBirth = new Date(Date.parse(dateOfBirth));
}

if (!dateOfBirth instanceof Date || dateOfBirth.toString() === 'Invalid Date') {
  return exits.invalidDateFormat('Invalid date supplied.');
}

return exits.success(~~((Date.now() - (+dateOfBirth)) / (31557600000)));