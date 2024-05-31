class loginPage
{
     getMessage()
    {
       return cy.get('#customer_login > .form__header > .form__title')
       .then(function (element) {
        const actualMessage = element.text()
        return actualMessage;
    });
    }
}

export default loginPage;