const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// test setter
test("Constructor can set school from arguments", () => {
    const testSchool = "Harvard";
    const x = new Intern("Jose", 117, "prince@yahoo.com", testSchool);
    expect(x.school).toBe(testSchool);
});

// test getter
test("Function getRole returns \"Intern\"", () => {
    const testRole = "driver";
    const x = new Intern("Audry", 83, "rogueladie@aol.com", testRole);
    expect(x.getRole()).toBe(testRole);
});








