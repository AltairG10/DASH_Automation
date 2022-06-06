/// <reference types="cypress" />

class ReportAdmin {
    constructor(){
        this.main_menu = 'li[class="dropdown"]';
        this.report_admin = 'a[href="/reports/reportdistributions"]';
        this.client_list = 'select[id="lstClient"]';
        this.report_data = 'a[href="/reportdistributions/getfile?fileid=4344805d-a02b-45ad-b0b3-2cdccbb2fc4c&clientid=FB"]';
    }


    reportVal(){
        cy.get(this.main_menu).click();
        cy.get(this.report_admin).click();
        cy.get(this.client_list).select('Meta');
        cy.get(this.report_data).should('exist');

        cy.url().should('eq', 'https://qa-workplace.altairglobal.net/reports/reportdistributions');

        cy.log('Report Administration test correctly validated');

    }
}

export default new ReportAdmin()