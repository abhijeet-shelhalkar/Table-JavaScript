
var index = 0;

function insertUserDataInTableRow() {
  index++;
  // insert data in table thead
  /* var userTable = document.getElementById('user-table'); */

  // insert data in table tbody
  let userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
  // Insert a row at the end of the table
  let row = userTable.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let username = document.getElementById("fullname").value;
  let email = document.getElementById("usermail").value;
  cell1.innerHTML = index;
  cell2.innerHTML = username;
  cell3.innerHTML = email;
}