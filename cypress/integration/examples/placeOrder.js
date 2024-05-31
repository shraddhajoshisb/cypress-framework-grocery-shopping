/// <reference types="Cypress" />

//importing pageObject classes
import homePage from "../pageObject/homePage"
import collectionPage from "../pageObject/collectionPage"
import loginPage from "../pageObject/loginPage"

describe("place order", function () {
    
    it("adding items to cart", function () {
        
        //sending data from ficture file 
        cy.fixture('products').then((data)=>{

        //creating objects of pageobject classes
        const home = new homePage()
        const collectiontab = new collectionPage()
        const login = new loginPage()

        cy.visit("https://suneethafoods.com")
        //click on grocery tab
        home.getGrocerytab().click()
        //click on flour tab 
        collectiontab.getFlourTab().click()
        //selectProduct is customised command which selects the products given 
        //fixture fine products
        cy.selectProduct(data.productName)
        collectiontab.getViewCartButton().click()
        collectiontab.getCheckOutButton().click()

        //verify the message includes login
        login.getMessage().then((actualMessage) => {
           expect(actualMessage).to.include("Login");
        })
    })
})
})