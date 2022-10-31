const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// test for setter
test("Constructor can set office number from arguments", () => {
    const testValue = 127;
    const x = new Manager("Evan", 20, "bigshot@aol.com", testValue);
    expect(x.office).toBe(testValue);
});








