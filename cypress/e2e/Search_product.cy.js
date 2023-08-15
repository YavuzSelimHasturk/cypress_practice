describe('Searchbox test', () => {
    
    it('Search a valid product', () => {
        // config.js de tamimladigim url sayesinde hizli erisim saglanir
        cy.visit('/')

        // Search boxa ulasabilmek icin Product sayfasina tiklanir
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()

        // product sayfasinin acildigi dogrulanir
        assert(cy.get('#sale_image').should('be.visible'))

        // search box a bir urun yazilir ve aranir
        cy.get('#search_product').type('Sleeveless Dress')
        cy.get('#submit_search').click()


       // cy.scrollTo(3500,100)
       // cy.wait(3000)
        assert(cy.get('.productinfo').should('be.visible'))

    });
});