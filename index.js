// Write your solution in this file!

// initialize employee object
const employee = {};

employee.name = "Jason K";
employee.streetAddress = "10 Earle Street";

// returns an employee with the original key value pairs and the new key value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]:value};
}

// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

// returns employee without the deleted key/value pair
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}