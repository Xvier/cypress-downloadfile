/// <reference types="cypress" />

describe('Cypress Downloadfile Testing', () => {
    it('Medium Size file', () => {
        cy.visit('http://ovh.net/files/')
        cy.downloadFile(
            'http://ovh.net/files/100Mio.dat',
            'mydownloads',
            '100Mio.dat',
            'MyAgent'
        )
    })
    it('Small Size test', () => {
        cy.downloadFile(
            'http://ovh.net/files/10Mio.dat',
            'mydownloads',
            '10Mio.dat'
        )
    })
    it('PDF test', () => {
        cy.downloadFile(
            'http://www.africau.edu/images/default/sample.pdf',
            'mydownloads',
            'sample.pdf'
        )
    })
    it('Image Size test', () => {
        cy.downloadFile(
            'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
            'mydownloads',
            'example.jpg'
        )
    })
})


