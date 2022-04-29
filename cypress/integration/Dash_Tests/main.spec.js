/// <reference types="cypress" />

import open from './Login.spec.js';
import sessions from './ActiveSessions.spec.js';
import bank from './Bank_Profiles.spec.js';
import docs from './Documents.spec.js';
import email from './Email_Viewer.spec.js';

const URL = 'https://qa-workplace.altairglobal.net/account/signin';
const accnt = "samuelcherinet";



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


