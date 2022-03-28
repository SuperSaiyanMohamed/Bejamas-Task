class HomePage {
    get itemProduct() {
        return cy.get(`.jlvejm`);
    }
    get itemCard() {
        return cy.get('.OdCKD');
    }
    get addToCartButton() {
        return cy.get('.fQMgOi')
    }
    get productsList() {
        return cy.get('.eAPRKs');
    }
    get prevButton() {
        return cy.get('.ZquGu')
    }
    get paginationSelectedButton() {
        return cy.get('.bbjimK')
    }


    visitHomePage() {
        cy.visit('/');
    }
    checkProductListCount() {
        this.itemProduct.should('have.length', 6);
    }
    checkAddToCartButtonExists() {
        this.productsList.scrollIntoView({ easing: 'linear' });
        this.itemCard.each(($el) => {
            cy.wrap($el).trigger('mouseover').contains('button', 'Add to Cart');
        })
    }
    checkPrevButtonDisabledAndFirstItemClicked() {
        this.paginationSelectedButton.scrollIntoView().should('have.text', '1');
        this.prevButton.should('be.not.enabled');
    }
}
module.exports = new HomePage();