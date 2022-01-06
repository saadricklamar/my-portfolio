describe("Landing Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("displays the correct header", () => {
    cy.get("header").should("have.class", "App-header");
  });
  it("displays the correct h1 tag", () => {
    cy.get("h1").should("have.id", "landing-greeting");
  });
  it("displays a 'view my work' button", () => {
    cy.get(".home-button").should("have.text", "View my work");
  });
});
