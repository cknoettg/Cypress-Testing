describe("Testing our form submission...", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    });
    it("Testing our input values...", () => {
        cy.get('input[name="name"]')
            .type("Corey")
            //note: should is our assert
            .should("have.value", "Corey");
        cy.get('input[name="email"]')
            .type("email@email.com")
            .should("have.value", "email@email.com");
        cy.get('input[name="password"]')
            .type("123456")
            .should("have.value", "123456");
        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked");
        cy.get("button").click();
    }); //end of it statement
}); //end of describe