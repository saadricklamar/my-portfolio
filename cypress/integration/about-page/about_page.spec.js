describe("About/Content Page", () => {
  beforeEach(() => {
    cy.visit("/").get(".home-button").click();
  });
  it("should display the about/content page", () => {
    cy.get("section").should("have.class", "main-content");
  });
  it("should have a React link going to the React home page", () => {
    cy.get("#react-link")
      .should("have.attr", "href")
      .and("equal", "https://reactjs.org/");
  });
  it("should have a Vue link going to the Vue home page", () => {
    cy.get("#vue-link")
      .should("have.attr", "href")
      .and("equal", "https://vuejs.org/");
  });
  it("should have a Figma link going to the Figma home page", () => {
    cy.get("#figma-link")
      .should("have.attr", "href")
      .and("equal", "https://www.figma.com/");
  });
  it("should have a Canva link going to the Canva home page", () => {
    cy.get("#canva-link")
      .should("have.attr", "href")
      .and("equal", "https://www.canva.com/");
  });
  it("should have a 'here' link that opens a photo gallery", () => {
    cy.get(".browse").click().get("div").should("have.class", "carousel");
  });
  it("should allow users to browse right through the photo gallery", () => {
    cy.get(".browse")
      .click()
      .get(".slider-control-centerright")
      .click()
      .get("#caption-photo-2")
      .should("have.text", "Sunset at Black Canyon of the Gunnison, Colorado");
  });
  it("should allow users to browse left through the photo gallery", () => {
    cy.get(".browse")
      .click()
      .get(".slider-control-centerright")
      .click()
      .click()
      .click()
      .get(".slider-control-centerleft")
      .click()
      .get("#caption-photo-3")
      .should("have.text", "Saguaro National Park, Arizona");
  });
  it("should go to the Home page after clicking the 'Home' icon button", () => {
    cy.get(".home-icon")
      .click({ multiple: true, force: true })
      .get("div")
      .should("have.class", "App");
  });
  it("should go to the About page after clicking the 'About' button", () => {
    cy.get("#about").click().get("div").should("have.class", "content");
  });
  it("should go to the Experience page after clicking the 'Experience' button", () => {
    cy.get("#experience")
      .click()
      .get("main")
      .should("have.class", "Experience");
  });
  it("should go to the Skills page after clicking the 'Skills' button", () => {
    cy.get("#skills").click().get("div").should("have.class", "Skills");
  });
  it("should go to the Projects page after clicking the 'Projects' button", () => {
    cy.get("#project").click().get("main").should("have.class", "projects");
  });
  it("should go to the Contact page after clicking the 'Contact' button", () => {
    cy.get("#contact").click().get("main").should("have.class", "contact-page");
  });
});
