const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connectionProperties = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "#Capulin1967",
    database: "employeetrackerDB"
  
}

const connection = mysql.createConnection(connectionProperties);

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

  // View the department

  function viewDepartment() {
    console.log("Selecting all departments...\n");
    connection.query("SELECT * FROM departments", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      createFriends();
    });
  }
// To add a new department 

  function addDepartment() {
    inquirer
      .prompt({
        name: "department",
        type: "input",
        message: "What is the name of new department?"
      })
      .then(function(answer) {
        connection.query(
            "INSERT INTO departments SET ?",
            {
              name: answer.department,
              
            },
            function(err, res) {
              if (err) throw err;
              console.log(res.affectedRows + " departments inserted!\n");
              // Call updateProduct AFTER the INSERT completes
              createFriends();
            }
          );
      });
  }

  // View employee's roles

  function viewRole() {
    console.log("Selecting all roles...\n");
    connection.query("SELECT * FROM roles", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.table(res);
      createFriends();
    });
  }

  function viewEmployees() {
    let query = "Select e.id, e.first_name, e.last_name, role.title, department.name AS department";
    console.log("Selecting all employees...\n");
    connection.query(query, function(err, res){
      if (err) throw err;
      console.log("\n");
      console.table(res);
      createFriends();
    });
  }
  
  