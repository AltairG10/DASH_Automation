/// <reference types="cypress" />

class BankProfiles {
    constructor(){

        this.user_search = 'input[id="search-fld"]';
        this.search_bttn = 'i[class="far fa-search"]';
        this.bank_option = 'li[active="tabs.BankProfiles.active"]';
        this.data_type = 'td[data-title-text="Profile Type"]';
        this.data_bank = 'td[data-title-text="Financial Institution"]';

    }

    bankProfile(){

        cy.get(this.user_search).type('2019-32500');
        cy.get(this.search_bttn).click();
        cy.get(this.bank_option).click();
        cy.get(this.data_type).should('exist');
        cy.get(this.data_bank).should('exist');

        cy.log('Bannk Profile test correctly validated');

    }

}

export default new BankProfiles()