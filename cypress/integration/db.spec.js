describe('DB Operations', () => {
    it('Read Data', () => {
        cy.task('getSqlData', 'select * from users').then((data) => {
            console.log(data);
        });
    });
});
