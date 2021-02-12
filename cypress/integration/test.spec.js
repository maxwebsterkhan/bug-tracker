const { it } = require("mocha");
const { describe } = require("mocha");

describe("Log in/out functionality", () => {
  it('finds the content "type"', () => {
    cy.visit("http://localhost:8080/");
    cy.get("#login").click();
    cy.get('input[name="email"]').type("max.webster-khan+test@zonedigital.com");
    cy.get('input[name="password"]').type("test123.");
    cy.get('button[name="submit"]').click();
    cy.get("#logout").click();
  });
});
