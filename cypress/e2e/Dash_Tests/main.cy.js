/// <reference types="cypress" />

// Dash Regression Suite

import open from './Login.cy.js';
import sessions from './ActiveSessions.cy.js';
import bank from './Bank_Profiles.cy.js';
import docs from './Documents.cy.js';
import email from './Email_Viewer.cy.js';
import summary from './EmployeeSummary.cy.js';
import expense from './Expenses.cy.js';
import exception from './Exceptions.cy.js';
import reports from './ReportAdministration.cy.js';
import sso from './SSOMapping.cy.js';
import trip from './Travel.cy.js';

const URL = 'https://qa-workplace.altairglobal.net/account/signin';
const accnt = "abrahamrodriguez";



describe('Dash Portal Login/SignOut', () => {

    beforeEach(() => {
        cy.visit(URL);
    })

    it("Customer Portal Login/SignOut Test", () => {

        open.login(accnt);

    })

})

describe('Active Sessions', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })

    it("Active Session Test", () => {

        sessions.active_sessions_validation();

    })

})

describe('Bank Profile', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })

    it('Bank Profile Test', () => {

        bank.bankProfile();

    })

})

describe('Documents', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })

    it('Documents Test', () => {

        docs.documentsTab();

    })

})

describe('Email Viewer', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })

    it('Email viewer Test', () => {

        email.email()

    })
})


describe('Employee Summary', () => {

     beforeEach(() => {
         cy.visit(URL);
         open.login(accnt);
     })
    
      it('Employee Summary test', () => {
    
         summary.employeSummary();
    
      })

})

describe('Expenses Summary', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })
   
     it('Expenses Summary test', () => {
   
        expense.expenseSummary();
   
     })

})

describe('Exceptions Summary', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })
   
     it('Exceptions Summary test', () => {
   
        exception.exceptionVal();
   
     })

})

describe('Reports Summary', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })
   
     it('Report Administration test', () => {
   
        reports.reportVal();
   
     })

})

describe('SSO Mapping Summary', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })
   
     it('SSO Mapping test', () => {
   
        sso.ssoVal();
   
     })

})

describe('Travel Summary', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt);
    })
   
     it('Travel Summary test', () => {
   
        trip.travelVal();
   
     })

})

