const Employee = require("../lib/Employee");

// test for correct type of data
test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

// tests for setters
test("Constructors can set name from arguments", () => {
    // variable for name
    // variaable for new Employee(variable for name)
    // expect toBe
});

// tests for getters
test("Function getName acquires user input", () => {
    const testName = "Jack";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test("Function getId acquires user input", () => {
    const testId = 15;
    const employee = new Employee(testId);
    expect(employee.getId()).toBe(testId);
});

test("Function getEmail acquires user input", () => {
    const testEmail = "user@email.com";
    const employee = new Employee(testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test("Function getRole acquires user input", () => {
    const testRole = "driver";
    const employee = new Employee(testRole);
    expect(employee.getRole()).toBe(testRole);
});