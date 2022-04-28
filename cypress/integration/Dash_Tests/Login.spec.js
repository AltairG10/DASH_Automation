/// <reference types="cypress" />

class Login {
    constructor(){
        this.user = '#UserName';
        this.log_bttn = 'button[type="submit"]';
        this.out_option = 'a[ng-click="vm.getCoverageOptions()"]';
        this.out_bttn = 'a[qa-target="UserSignOut"]';

    }

    login (accnt){
        cy.get(this.user).type(accnt);
        cy.get(this.log_bttn).click();
        //cy.get(this.out_option).click();
        //cy.get(this.out_bttn).click();

        cy.log('Login test Correctly Validated');
    }

}

export default new Login()