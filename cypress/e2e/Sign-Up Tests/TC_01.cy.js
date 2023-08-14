

import Homepage from "../../Pages/Home Page Locates.cy";


describe('Signing with a valid email', () => {

    const homePage = new Homepage()
    beforeEach(() => {
        cy.visit('/')
    });
    it('verify the website title', () => {
       cy.title().should('eq','Automation Exercise')
    });
    it('Signing in successfully', () => {
       
        homePage.getSignUpLink()   

        homePage.getEmailBox()
        homePage.getPasswordBox()
        homePage.getLoginButton()
        
        assert(homePage.getDeleteAccountButton().should('be.visible'))

    });
});