const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// test for setter
test("Constructor can set school from arguments", () => {
    const testSchool = "Harvard";
    const x = new Intern("Jose", 117, "prince@yahoo.com", testSchool);
    expect(x.school).toBe(testSchool);
});










