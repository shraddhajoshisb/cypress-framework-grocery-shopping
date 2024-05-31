class homePage{

    getGrocerytab()
    {
        return cy.get('a[href="/collections"].link')
    }
}

export default homePage;