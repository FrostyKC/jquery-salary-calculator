console.log('Weekend Project');

const employeeList = [];

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

  // store input info
  const employee = {
    firstName,
    lastName,
    idNumber,
    jobTitle,
    annualSalary,
  };
  employeeList.push(employee);
  // show input info to dom
  render();
  clickClear();
}

function render() {
  $('.js-employeeList').empty();
  for (let i = 0; i < employeeList.length; i++) {
    const employeeInfo = employeeList[i];

    $('.js-employeeList').append(
      `<tr>
        <td>${employeeInfo.firstName}</td>
        <td>${employeeInfo.lastName}</td>
        <td>${employeeInfo.idNumber}</td>
        <td>${employeeInfo.jobTitle}</td>
        <td>${employeeInfo.annualSalary}</td>
      </tr>`
    );
  }
}

function clickClear() {
  $('.container input[type="text"]').val('');
  $('.container input[type="number"]').val('');
}
