// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// 
//
// -- This is a parent command --
//selectProduct is customised command which selects the products given 
//fixture fine products
Cypress.Commands.add("selectProduct", (productNames) => {
    productNames.forEach(productName => {
        cy.get('.product-item').each(($element, index, $list) => {
            if ($element.text().includes(productName)) {
                cy.wrap($element).find('button[data-action="add-to-cart"]').click();
                cy.wait(600)
            }
        });
    });
});



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })