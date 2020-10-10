console.log('Weekend Project');

const employeeList = [];

$(document).ready(goodToGo);

// If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

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
  // show input info to dom and clears input values
  render();
  calcMonthly();
  clickClear();
}

function render() {
  // clears the list
  $('.js-employeeList').empty();

  // Showing each employee and their values on the list
  for (let i = 0; i < employeeList.length; i++) {
    const employeeInfo = employeeList[i];

    $('.js-employeeList').append(
      `<tr>
        <td>${employeeInfo.firstName}</td>
        <td>${employeeInfo.lastName}</td>
        <td>${employeeInfo.idNumber}</td>
        <td>${employeeInfo.jobTitle}</td>
        <td>${employeeInfo.annualSalary}</td>
        <td><button>Delete</button></td>
      </tr>`
    );
  }
}

function clickClear() {
  // Clears the input values when button is clicked
  $('.container input[type="text"]').val('');
  $('.container input[type="number"]').val('');
}

function calcMonthly() {
  // Calculates the annual salaries to show monthly salary
  let monthlyTotal = 0;

  for (let i = 0; i < employeeList.length; i++) {
    const employeeInfo = employeeList[i];
    monthlyTotal += parseInt(employeeInfo.annualSalary);
  }
  monthlyTotal /= 12;
  console.log('in calcMonthly', monthlyTotal);
  $('.js-totalMonthly').text(monthlyTotal);

  // if monthlytotal is more than 20k then adds red background to the amount
  if (monthlyTotal > 20000) {
    $('.js-totalMonthly').css('background-color', 'red');
  }
}
