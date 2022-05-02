/// <reference types="cypress" />

class Summary {


    constructor(){

        this.user_search = 'input[id="search-fld"]';
        this.search_bttn = 'i[class="far fa-search"]';
        this.user_name = 'span[style="font-weight: bold; font-size: large"]';
        this.user_company = 'span[ng-bind="ee.CompanyDisplayWithJobTitle"]';
        this.user_origin = 'span[ng-bind="ee.OriginDisplay"]';





    }


    employeSummary(){

        cy.get(this.user_search).type('2019-32500');
        cy.get(this.search_bttn).click();
        cy.get(this.user_name).should('exist');
        cy.get(this.user_company).should('exist');
        cy.get(this.user_origin).should('exist');

        cy.url().should('eq', 'https://qa-workplace.altairglobal.net/ee/dashboard/employee/2019-32500#?tab=overview');

        cy.log("Employee Summary test correclty validated");


    }

}

export default new Summary()