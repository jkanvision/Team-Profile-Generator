const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// test setter
test("Constructor can set office number from arguments", () => {
    const testValue = 127;
    const x = new Manager("Evan", 20, "bigshot@aol.com", testValue);
    expect(x.office).toBe(testValue);
});

// test getter
test("Function getRole returns \"Manager\"", () => {
    const testRole = "driver";
    const x = new Manager("Andy", 9, "theman@example.com", testRole);
    expect(x.getRole()).toBe(testRole);
});







