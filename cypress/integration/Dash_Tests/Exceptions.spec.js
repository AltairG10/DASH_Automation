/// <reference types="cypress" />

class Exceptions {
    constructor(){
        this.user_search = 'input[id="search-fld"]';
        this.search_bttn = 'i[class="far fa-search"]';
        this.except_opt = 'li[active="tabs.Exceptions.active"]';
        this.data_except = 'td[data-title-text="Category"]';
    }

    exceptionVal(){

        cy.get(this.user_search).type('2019-32500');
        cy.get(this.search_bttn).click();
        cy.get(this.except_opt).click();
        cy.get(this.data_except).should('exist');

        cy.url().should('eq', 'https://qa-workplace.altairglobal.net/ee/dashboard/employee/2019-32500#?tab=exceptions');

        cy.log('Exception test correctly validated');


    }

}

export default new Exceptions()