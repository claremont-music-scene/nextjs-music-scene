describe('Events Page Loads', () => {
    it('loads the page', () => {
        cy.visit('http://localhost:3000/events')
    })
})


describe('Other Events Page Loads', () => {
    it('loads the page and checks for event presence', () => {
        cy.visit('http://localhost:3000/community/events')
        cy.get('.event-card > :nth-child(1) > div > a').click()
    })

})

describe('Load Event from Events Page', () => {
    it('follows an event link to event detail', () => {
        cy.visit('http://localhost:3000/community/events')
        cy.get('.event-card > :nth-child(1) > div > a').click()

        cy.get(':nth-child(6) > a').click()
        cy.url().should('equal', 'http://localhost:3000/community/events')
    })

})