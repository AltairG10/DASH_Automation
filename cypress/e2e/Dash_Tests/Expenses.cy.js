/// <reference types="cypress" />

class Expenses{
    constructor(){
        this.user_search = 'input[id="search-fld"]';
        this.search_bttn = 'i[class="far fa-search"]';
        this.expenses_opt = 'li[active="tabs.Expenses.active"]';
        this.request_info = 'td[ng-bind-html="exp.Name| highlight:expensesQuery"]';
    }

    expenseSummary(){
        cy.get(this.user_search).type('2019-32500');
        cy.get(this.search_bttn).click();
        cy.get(this.expenses_opt).click();
        cy.get(this.request_info).should('exist');

        cy.url().should('eq', 'https://qa-workplace.altairglobal.net/ee/dashboard/employee/2019-32500#?tab=expenses');

        cy.log('Expenses test correctly validated');
    }

}

export default new Expenses()