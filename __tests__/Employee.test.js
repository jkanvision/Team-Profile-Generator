const Employee = require("../lib/Employee");

// test for correct type of data
test("Class constructor creates an object", () => { 
    const x = new Employee();
    expect(typeof(x)).toBe("object");
});

// tests for setters
test("Constructor can set name from arguments", () => {
    const testName = "Vicky";
    const x = new Employee(testName);
    expect(x.empName).toBe(testName);
});

test("Constructor can set id from arguments", () => {
    const testId = 8;
    const x = new Employee("Nancy",testId);
    expect(x.id).toBe(testId);
});

test("Constructor can set email from arguments", () => {
    const testEmail = "doe@gmail.com";
    const x = new Employee("Gerald", 74, testEmail);
    expect(x.email).toBe(testEmail);
});

// tests for getters
test("Function getName acquires user input", () => {
    const testName = "Jack";
    const x = new Employee(testName);
    expect(x.getName()).toBe(testName);
});

test("Function getId acquires user input", () => {
    const testId = 15;
    const x = new Employee("Katie", testId);
    expect(x.getId()).toBe(testId);
});

test("Function getEmail acquires user input", () => {
    const testEmail = "user@email.com";
    const x = new Employee("Cloe", 99, testEmail);
    expect(x.getEmail()).toBe(testEmail);
});

