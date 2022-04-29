/// <reference types="cypress" />

class Documents{
    constructor(){

        this.user_search = 'input[id="search-fld"]';
        this.search_bttn = 'i[class="far fa-search"]';
        this.documents_opt = 'li[active="tabs.Documents.active"]';
        this.ref_docs = 'button[ng-click="manageReferenceDocuments()"]';
        this.up_docs = 'button[ng-click="uploadDocument()"]';


    }

    documentsTab(){

        cy.get(this.user_search).type('2019-32500');
        cy.get(this.search_bttn).click();
        cy.get(this.documents_opt).click();
        cy.get(this.ref_docs).should('exist');
        cy.get(this.up_docs).should('exist');

        cy.log('Documents test correctly validated')

    }

}

export default new Documents()