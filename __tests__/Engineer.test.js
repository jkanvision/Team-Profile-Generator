const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// tests for getters
test("Constructor can set github profile URL from arguments", () => {
    const testGithub = "user@github.com";
    const x = new Engineer("Jesse", 53, "whynot@email.com", testGithub);
    expect(x.github).toBe(testGithub);
});

test("Function getRole returns \"Engineer\"", () => {
    const testRole = "developer";
    const x = new Engineer("Michael", 846, "creative@yahoo.com", testRole);
    expect(x.getRole()).toBe(testRole);
});






