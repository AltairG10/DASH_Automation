/// <reference types="cypress" />

class ActiveSession {
    constructor(){

        this.main_menu = 'li[class="dropdown"]';
        this.active_session_option = 'a[href="/portals/sessions/dashboard"]'; 
        this.current_sessions = ':nth-child(2) > .panel-heading > h5';
        // We should figure out how to add more functionality here... 

    }

    active_sessions_validation () {

        cy.get(this.main_menu).click();
        cy.get(this.active_session_option).click();
        cy.get(this.current_sessions).should('exist');

        cy.log('Active Sessions test correctly Validated');

    }
}

export default new ActiveSession()
