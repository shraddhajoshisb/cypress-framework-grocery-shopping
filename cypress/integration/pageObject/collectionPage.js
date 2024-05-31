class collectionPage {


    getFlourTab()
    {
        return cy.contains('a.collection-block-item', 'Flour')
    }

    getproducts()
    {
        return cy.get('.product-list > :nth-child(8)')
    }

    getAddToCartButton()
    {
        return  cy.get('.product-form__add-button')
    }

    getViewCartButton()
    {
        return  cy.get('.button--secondary')
    }
    getCheckOutButton()
    {
        return cy.get('.cart-recap__checkout')
    }
}
//exporting the collectionPage
export default collectionPage;