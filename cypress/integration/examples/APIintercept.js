/// <reference types="Cypress" />


describe(" API mock test" , ()=>{
    it('1 mock request',()=>{

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept({
            method : 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body: [{
                "name":"Learn cypress Automation with me",
                "isbn":"mypj",
                "aisle":"997"
            }]
        })
        cy.get(".btn-primary").click()
    })

    
})