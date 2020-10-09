$(document).ready(goodToGo);

//A 'Submit' button should collect the form information, store the information to calculate monthly costs,
// append information to the DOM and clear the input fields.

function goodToGo() {
  console.log('ready');
  $('.js-employeeSubmit').on('click', clickSubmit);
}
function clickSubmit() {
  // capture input info
  const firstName = $('.js-firstName').val();
  const lastName = $('.js-lastName').val();
  const idNumber = $('.js-idNumber').val();
  const jobTitle = $('.js-jobTitle').val();
  const annualSalary = $('.js-annualSalary').val();
  console.log(firstName, lastName, idNumber, jobTitle, annualSalary);

  // store input info
  const employee = {
    firstName,
    lastName,
    idNumber,
    jobTitle,
    annualSalary,
  };
  console.log(employee);
}
