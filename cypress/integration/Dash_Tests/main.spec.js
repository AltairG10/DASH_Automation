/// <reference types="cypress" />

// Dash Regression Suite

import open from './Login.spec.js';
import sessions from './ActiveSessions.spec.js';
import bank from './Bank_Profiles.spec.js';
import docs from './Documents.spec.js';
import email from './Email_Viewer.spec.js';
import summary from './EmployeeSummary.spec.js';
import expense from './Expenses.spec.js';
import exception from './Exceptions.spec.js';
import reports from './ReportAdministration.spec.js';
import sso from './SSOMapping.spec.js';
import trip from './Travel.spec.js';

const URL = 'https://qa-workplace.altairglobal.net/account/signin';
const accnt = "BhawnaSrivastava";



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

