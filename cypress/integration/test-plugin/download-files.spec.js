/// <reference types="cypress" />

describe('Cypress Downloadfile Testing', () => {
    it('Medium Size file', () => {
        cy.visit('https://speed.hetzner.de/')
        cy.downloadFile(
            'https://speed.hetzner.de/100MB.bin',
            'mydownloads',
            '100MB.bin'
        )
    })
    it('Small Size test', () => {
        cy.downloadFile(
            'https://library.concordia.ca/help/technology/recovering_saved_files.pdf',
            'mydownloads',
            'demo.pdf'
        )
    })
})
