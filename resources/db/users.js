var mongoose = require('mongoose');
var schemaValidator = require('./validator/schemaValidator');
var Mixed = mongoose.Schema.Types.Mixed;

const collectionSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    validate: schemaValidator.nameValidator
  },
  lastname: {
    type: String,
    required: true,
    validate: schemaValidator.nameValidator
  },
  username: {
    type: String,
    required: true,
    unique: "User with Username `{VALUE}` already present",
    validate: schemaValidator.nameValidator
  },
  email: {
    type: String,
    required: true,
    unique: "User with Email Address `{VALUE}` already present",
    validate: schemaValidator.emailValidator
  },
  password: {
    type: String,
    required: true,
    validate: schemaValidator.passwordValidator
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
    validate: schemaValidator.isAlphaNumericValidator
  },
  state: {
    type: String,
    required: true,
    validate: schemaValidator.isAlphaNumericValidator
  },
  country: {
    type: String,
    required: true,
    validate: schemaValidator.isAlphaNumericValidator
  },
  postal_code: {
    type: String,
    required: true,
    validate: schemaValidator.postalCodeValidator
  },
  phone_number: {
    type: String,
    required: true,
    unique: "User with Phone Number `{VALUE}` already present",
    validate: schemaValidator.phoneNumberValidator
  },
  role: {
    type: String,
    default: "user"
  },
  deleted: {
    type: String,
    default: "no"
  },
  active: {
    type: String,
    default: "no"
  },
  disabled: {
    type: String,
    default: "no"
  },
  nonce: String,
  created_at: Date,
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = collectionSchema;