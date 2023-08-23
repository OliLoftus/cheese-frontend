import RecommendationComponent from "./Recommendation";
import { MemoryRouter, Routes, Route } from "react-router";

describe("Cheese Recommendation", () => {
    it("should display the individual cheese component for the cheese object it receives, with some text", () => {
        cy.intercept("GET", "/api/ratings/cheese/recommendation", {
            statusCode: 200,
            body: {
                message: "Recommendation found",
                cleanRandomCheese: {
                    cheeseId: 1,
                    name: "Cheddar",
                    description: "A hard, sharp cheese",
                    type: "Hard",
                    flavour: "Sharp",
                    family: "Cheddar",
                    aromas: "Sharp",
                    region: "Somerset",
                    countries: "England",
                    milks: "Cow",
                    vegetarian: "Yes",
                    image: "https://i.imgur.com/0x1XH4k.jpeg",
                },
                highestRatedCheeseType: "Hard",
            },
        }).as("getCheese");
        cy.mount(
            <MemoryRouter>
                <RecommendationComponent />
            </MemoryRouter>
        );
        cy.wait("@getCheese");
        cy.get('[data-cy="description"]').should(
            "contain",
            "A hard, sharp cheese"
        );
    });
});
