/// <reference types="cypress" />

import open from './Login.spec.js';
import sessions from './ActiveSessions.spec.js';

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



