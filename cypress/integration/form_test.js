describe("Testing our form submission...", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    });
    it("Testing our input values...", () => {
        cy.get("button").should('be.disabled');
        //test for when name is empty
        cy.get('input[name="name"]').should('have.value', '');
        cy.get('input[name="name"]')
            .type("Corey")
            //note: should is our assert
            .should("have.value", "Corey");
        //test for when email is empty
        cy.get('input[name="email"]').should('have.value', '');
        cy.get('input[name="email"]')
            .type("email@email.com")
            .should("have.value", "email@email.com");
        //test for when password is empty
        cy.get('input[name="password"]').should('have.value', '');
        cy.get('input[name="password"]')
            .type("123456")
            .should("have.value", "123456");
        //test for when checkbox is not checked
        cy.get('[type="checkbox"]')
            .should("not.be.checked");
        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked");
        cy.get("button").click();
        cy.get("button").should('not.be.disabled');
    }); //end of it statement
}); //end of describe