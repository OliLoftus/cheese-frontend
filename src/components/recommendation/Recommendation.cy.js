import Recommendation from "./CheeseRecommendation";

describe("Cheese Recommendation", () => {
    it("should display the individual cheese component for the cheese object it receives, with some text", () => {
        const cheese = {
            id: 1,
            name: "Cheddar",
            description: "A hard, sharp cheese",
            type: ["Hard"],
            flavour: "Sharp",
            family: "Cheddar",
            aromas: ["Sharp"],
            region: "Somerset",
            countries: ["England"],
            milks: ["Cow"],
            vegetarian: "Yes",
            image: "https://i.imgur.com/0x1XH4k.jpeg",
        };
        cy.mount(<Recommendation cheese={cheese} />);
        cy.get('[data-cy="description"]').should(
            "contain",
            "A hard, sharp cheese"
        );
    });
});
