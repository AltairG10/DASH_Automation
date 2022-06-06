/// <reference types="cypress" />

class Travel{
    constructor(){
        this.user_search = 'input[id="search-fld"]';
        this.search_bttn = 'i[class="far fa-search"]';
        this.travel_opt = 'li[active="tabs.Travel.active"]';
        this.travel_profile = 'td[data-title-text="Full Legal Name"]';
        this.travel_trip = 'td[data-title-text="Trip Name"]';

    }

    travelVal(){
        cy.get(this.user_search).type('2019-32500');
        cy.get(this.search_bttn).click();
        cy.get(this.travel_opt).click();
        cy.get(this.travel_profile).should('exist');
        cy.get(this.travel_trip).should('exist');

        cy.url().should('eq', 'https://qa-workplace.altairglobal.net/ee/dashboard/employee/2019-32500#?tab=travel');

        cy.log('Travel test correclty Validated');

    }

}

export default new Travel()