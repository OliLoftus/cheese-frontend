import LoginForm from './LoginForm'
const navigate = () => {}

describe("Logging in", () => {
  it("calls the /api/tokens endpoint", () => {
    cy.mount(<LoginForm navigate={navigate}/>)

    cy.intercept('POST', '/api/tokens', { token: "fakeToken" }).as("loginRequest")

    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("[data-cy=SignIn]").click();
    cy.wait('@loginRequest').then( interception => {
      expect(interception.response.body.token).to.eq("fakeToken")
    })
  })
})