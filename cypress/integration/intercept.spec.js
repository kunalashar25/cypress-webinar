describe('Trello Board', () => {
    it('Spy on Get Call', () => {
        cy.intercept({
            method: 'GET',
            path: '/api/boards'
        }).as('spyGet');

        cy.visit('http://localhost:3000/');

        cy.wait('@spyGet').then((xhr) => {
            console.log(xhr);
            expect(xhr.response.statusCode).to.eq(200);
        });
    });

    it('Spy on Post Call', () => {
        cy.intercept({
            method: 'POST',
            path: '/api/boards'
        }).as('spyPost');

        cy.visit('http://localhost:3000/');

        const boardName = 'New Board';

        cy.get('[data-cy="create-board"]').click();
        cy.get('[data-cy="new-board-input"]').type(`${boardName}{enter}`);

        cy.wait('@spyPost').then((xhr) => {
            expect(xhr.response.statusCode).to.eq(201);
            expect(xhr.response.body.name).to.equal(boardName);
        });
    });

    it('Stub on Get Call', () => {
        cy.fixture('boardData').then((data) => {
            cy.intercept(
                {
                    method: 'GET',
                    path: '/api/boards'
                },
                data
            ).as('stubGet');

            cy.visit('http://localhost:3000/');

            cy.wait('@stubGet').then((xhr) => {
                expect(xhr.response.body.length).to.eq(3);
            });
        });
    });
});
