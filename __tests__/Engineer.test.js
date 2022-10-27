const Employee = require("../lib/Employee");

// tests for getters
test("Function getGithub acquires user input", () => {
    const testGithub = "user@github.com";
    const engineer = new Engineer(testGithub);
    expect(engineer.getGithub()).toBe(testGithub);
});






