import Homepage from "../Pages/Home Page Locates.cy";


describe('Signing with a invalid email', () => {

    const homePage = new Homepage()
    beforeEach(() => {
        cy.visit('/')
    });
    it('verify the website title', () => {
       cy.title().should('eq','Automation Exercise')
    });
    it('Signing in successfully', () => {
       
        homePage.getSignUpLink()   

        homePage.getWrongEmailBox()
        homePage.getPasswordBox()
        homePage.getLoginButton()
        
        assert(homePage.getIncorrectEmailWarning().should('be.visible'))

    });
});