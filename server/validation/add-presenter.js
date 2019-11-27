const validator = require ('validator');
const isEmpty = require ('./isEmpty');

module.exports = function validateAddPresenterInput (data) {
  const errors = {};
  data.name = !isEmpty (data.name) ? data.name : '';
  data.evaluatorName = !isEmpty (data.evaluatorName) ? data.evaluatorName : '';
  data.presentationTopic = !isEmpty (data.presentationTopic) ? data.presentationTopic : '';
  data.article = !isEmpty (data.article) ? data.article: '';

  if (!validator.isLength (data.name, {min: 3, max: 15})) {
    errors.name = 'Name must be between 2 to 15 characters';
  }
  if (isEmpty (data.name)) {
    errors.name = 'Name field is required';
  }
  if (!validator.isLength (data.evaluatorName, {min: 2, max: 15})) {
    errors.evaluatorName= 'Name must be between 2 to 15 characters';
  }
  if (isEmpty (data.evaluatorName)) {
    errors.evaluatorName = 'Name field is required';
  }
  if (!validator.isLength (data.presentationTopic, {min: 2, max: 15})) {
    errors.presentationTopic= 'Name must be between 2 to 15 characters';
  }
  if (isEmpty (data.presentationTopic)) {
    errors.presentationTopic = 'Name field is required';
  }
  
  if (!validator.isLength (data.article, {min: 2, max: 15})) {
    errors.article= 'Name must be between 2 to 15 characters';
  }
  if (isEmpty (data.article)) {
    errors.article = 'Name field is required';
  }
 
  return {
    errors: errors,
    isValid: isEmpty (errors),
  };
};