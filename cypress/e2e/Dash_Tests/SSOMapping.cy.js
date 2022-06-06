/// <reference types="cypress" />

class SSOMap{
    constructor(){
        this.main_menu = 'li[class="dropdown"]';
        this.sso_opt = 'a[href="/portals/ssoentitymaps/searchmaps"]';
        this.select_partner = 'select[ng-model="input.selectedPartnerId"]';
        this.submit_bttn = '#btnSubmit';
        this.reports_data = 'td[data-title-text="Company"]';
    }

    ssoVal(){
        cy.get(this.main_menu).click()
        cy.get(this.sso_opt).click();
        cy.get(this.select_partner).select('Meta');
        cy.get(this.submit_bttn).click();
        cy.get(this.reports_data).should('exist');

        cy.url().should('eq', 'https://qa-workplace.altairglobal.net/portals/ssoentitymaps/searchmaps');

        cy.log('SSO Mapping correclty validated');

    }

}

export default new SSOMap()