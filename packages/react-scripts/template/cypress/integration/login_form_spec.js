// TODO find out how to import
// import config from '../../src/app/config';
// const { api } = config;

describe('Contact form', () => {
    const url = 'http://private-e354b-cabtech.apiary-mock.com/api/v1/auth/sign-in'
    let polyfill

    before(() => {
        const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js'
        cy.request(polyfillUrl)
            .then((response) => {
                polyfill = response.body
            })
    })

    beforeEach(() => {
        cy.server()

        // We use cy.visit({onBeforeLoad: ...}) to delete native fetch and load polyfill code instead
        cy.visit('/login', {
            onBeforeLoad(win) {
                delete win.fetch
                // since the application code does not ship with a polyfill
                // load a polyfilled "fetch" from the test
                win.eval(polyfill)
                win.fetch = win.unfetch
            },
        })
    })

    it('sends a message', () => {
        cy.route({ method: 'POST', url }).as('postMessage')

        // Fill in values and submit from
        cy.get('form').within(() => {
            cy.get('input[name="email"]').type('jakub.baierl@ackee.cz')
            cy.get('input[name="password"]').type('heslo')
            cy.get('button[type="submit"]').click()
        })

        // Wait for request
        cy.wait('@postMessage')

        // Shows success view with reset
        cy.get('#userLogged').within(() => {
            cy.get('h1').should('have.value', 'true')
        })

    });
});
