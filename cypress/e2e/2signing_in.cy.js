describe("Signing in", () => {
    it("with valid credentials, redirects to 'index'", () => {
        cy.visit("/login");
        cy.get("#email").type("someone@example.com");
        cy.get("#password").type("password");
        cy.get("#Sign In").click();
    });

    it("with missing password, redirects to '/'", () => {
        cy.visit("/login");
        cy.get("#email").type("someone@example.com");
        cy.get("#submit").click();

        cy.url().should("include", "/login");
    });

    it("with missing email, redirects to '/login'", () => {
        cy.visit("/login");
        cy.get("#password").type("password");
        cy.get("#submit").click();

        cy.url().should("include", "/login");
    });
});
