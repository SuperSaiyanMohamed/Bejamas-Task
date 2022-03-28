const HomePage = require('../../pageObjects/homepage.js');
const customThresholds = {
    performance: 90,
    seo: 90
  };

  const desktopConfig = {
    formFactor: 'desktop',
    screenEmulation: { disabled: true },
  };

  const mobileConfig = {
    formFactor: 'mobile',
    screenEmulation: { disabled: false },
  };

describe('HomePage Test Suite', () => {
    it('Test 2.1 Check the product list have 6 items per page - Web - Chrome', () => {
        HomePage.visitHomePage();
        cy.wait(2500);
        HomePage.checkProductListCount();
    })
    it('Test 2.3 Check one of the normal products cards have the add to cart button - Web - Chrome', () => {
        HomePage.visitHomePage();
        cy.wait(2500);
        HomePage.checkAddToCartButtonExists();
    })
    it(`Test 4.1 Check the products first page doesn't show the prev arrow - Web - Chrome.`, () => {
        HomePage.visitHomePage();
        cy.wait(1000);
        HomePage.checkPrevButtonDisabledAndFirstItemClicked();
    })
    it('Test 7.1 Check Lighthouse page performance and SEO have +90 score - Web - Chrome - Bonus.', () => {
        HomePage.visitHomePage();
        cy.wait(1000);
        cy.lighthouse(customThresholds, desktopConfig);
    })
    it('Test 7.2 Check Lighthouse page performance and SEO have +90 score - Mobile - Chrome - Bonus.', () => {
        HomePage.visitHomePage();
        cy.wait(1000);
        cy.lighthouse(customThresholds, mobileConfig);
    })
})