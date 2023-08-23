import { MemoryRouter } from "react-router-dom";
import NavigationBar from "./Navigation";

describe("Navigation bar", () => {
    it("has links for homepage, sign in", () => {
        cy.mount(
            <MemoryRouter>
                <NavigationBar />
            </MemoryRouter>
        );
        cy.get("[data-cy=home]")
            .should("contain", "Brielievers")
            .click()
            .url()
            .should("include", "/");
        cy.get("[data-cy=signin]")
            .should("contain", "Sign In")
            .should("have.attr", "href", "/");
        cy.get("[data-cy=cheese-menu]").should("contain", "Hard");
        cy.get('[data-cy="recommendation"]').should(
            "contain",
            "Get recommendation"
        );
    });
});
