const inquirer = require('inquirer');
const { connection } = require('./db');

// Main menu
function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end();
          break;
        default:
          console.log('Invalid choice');
          start();
      }
    });
}

// Function to view all departments
function viewDepartments() {
  // Write SQL query to select all departments
  const query = 'SELECT * FROM department';

  // Execute the query
  connection.query(query, (err, res) => {
    if (err) throw err;

    // Display the department table
    console.table('Departments:', res);

    // Go back to the main menu
    start();
  });
}

//Still need to do:  Implement the remaining functions for viewRoles, viewEmployees, addDepartment, addRole, addEmployee, and updateEmployeeRole.

// Start the application
start();


