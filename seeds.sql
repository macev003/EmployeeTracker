INSERT INTO departments (name)
VALUES ("sales"),("legal"),("accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("accountant", 800000, 3), ("lawyer", 120000, 2), ("leadsalesperson", 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rachel", "Green", 3, null), ("Monica", "Geller", 1, null), ("Phoebe", "Buffet", 2, null);