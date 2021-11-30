describe('Excel Operations', () => {
    it('Read Data', () => {
        cy.task('getExcelData', { path: 'cypress/fixtures/WebinarData.xlsx', sheet: 'Sheet1' }).then((data) => {
            console.log(data);
        });
    });

    // before -> run once
    // after -> run once
    // beforeEach -> run before each test case -> it()
    // afterEach -> run before each test case -> it()
});
