/// <reference types="cypress" />

class emailViewer {
    constructor(){

        this.main_menu = 'li[class="dropdown"]';
        this.admin_tool = 'a[href="/admin/tools"]';
        this.email_search = 'a[href="/admin/email/search"]';
        this.email_bttn = 'button[id="btnSubmit"]';
        this.email_data = 'span[ng-bind="email.To"]';

    }

    email(){
        
        cy.get(this.main_menu).click();
        cy.get(this.admin_tool).click();
        cy.get(this.email_search).click();
        cy.get(this.email_bttn).click();
        cy.get(this.email_data).should('exist');

        cy.log('Email Viewer test correctly valdaated');
    }

}

export default new emailViewer()