console.log('Weekend Project');

let employeeList = [];

$(document).ready(goodToGo);

function goodToGo() {
  console.log('ready');
  $('.js-employeeSubmit').on('click', clickSubmit);
  $('.js-employeeList').on('click', '.js-deleteButton', deleteEmployee);
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
  //shows each employee added to table with input values
  render();
  //calculates the monthly salaries from input given, will turn red if over limit
  calcMonthly();
  //clears the input values on submit
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
        <td><button class='js-deleteButton' data-index='${i}'>Delete</button></td>
      </tr>`
    );
  }
}

function deleteEmployee() {
  // deletes employee and their values
  let index = $(this).data('index');
  employeeList.splice(index, 1);
  render();
  calcMonthly();
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

  // if monthly total is more than 20k then adds red background to the amount
  if (monthlyTotal > 20000) {
    $('.js-totalMonthly').css('background-color', 'red');
  }
}
