## EmployeeTracker

## Description 
As more and more employers are choosing to work remotely, adding and updating employees into the company's database can be done from home. Using MySQL, you will be able to view employees, departments, roles, and add new employees to the system.

## To Get Started
In order to use this application you will need to first run an npm install in your CLI to install the necessary dependencies. After this has been completed, run node tracker.js in your CLI to start the prompts that will walk you through the different tasks you can perform with this application.

## Brief View of the Code 
*Database
DROP DATABASE IF EXISTS employeetrackerDB;

CREATE DATABASE employeetrackerDB;

USE employeetrackerDB;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

*Server side
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createFriends();
  });

  function createFriends() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
          "View Department",
          "View Role",
          "View Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View Department":
          viewDepartment();
          break;
  
        case "View Role":
          viewRole();
          break;
  
        case "View Employees":
          viewEmployees();
          break;
  
        case "Add Department":
          addDepartment();
          break;
  
        case "Add Role":
          addRole();
          break;
        
        case "Add Employee":
            addEmployee();
            break;

        case "Update Employee Role":
            updateEmployeeRole();
            break;
              
        }
      });
  }

## Applications Used
* [MySQL](https://www.mysql.com/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [npmjs](https://docs.npmjs.com/)
* [inquirer](https://www.npmjs.com/package/inquirer)

## Author
Maira Acevedo 