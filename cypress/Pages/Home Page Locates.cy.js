class Homepage{

    getSignUpLink(){
       return cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }
    getEmailBox(){
        return cy.get('[data-qa="login-email"]').type('jacehe9065@webonoid.com')
    }
    getPasswordBox(){
        return cy.get('[data-qa="login-password"]').type('123456Aa.,')
    }
    getLoginButton(){
        return cy.get('[data-qa="login-button"]').click()
    }
    getDeleteAccountButton(){
        return cy.get('.shop-menu > .nav > :nth-child(5) > a')
    }
}
export default Homepage