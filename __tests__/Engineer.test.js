const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// test for setter
test("Constructor can set github profile URL from arguments", () => {
    const testGithub = "user@github.com";
    const x = new Engineer("Jesse", 53, "whynot@email.com", testGithub);
    expect(x.github).toBe(testGithub);
});








