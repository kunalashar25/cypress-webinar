describe('Verify DemoQA website', () => {
    it('Verify registration form', () => {
        cy.visit('/automation-practice-form');

        cy.get('#firstName').type(Cypress.env('username'));
        cy.get('#lastName').type(Cypress.env('password'));

        cy.get('#submit').click();
    });
});
