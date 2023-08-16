import Homepage from "../Pages/Home Page Locates.cy";

describe('Cart Test', () => {
    const homePage=new Homepage()
    it('Add one product to the cart', () => {
    
        cy.visit('/')
        homePage.getSignUpLink()   

        homePage.getEmailBox()
        homePage.getPasswordBox()
        homePage.getLoginButton()
       
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('#search_product').type('Sleeveless Dress')
        cy.get('#submit_search').click()
        cy.get('.productinfo > .btn').click()
        cy.get('u').click()
        assert(cy.get('#product-3').should('be.visible'))

    
    });
});