/// <reference types="cypress" />

describe('Cypress Downloadfile Testing', () => {
    it('Medium Size file', () => {
        cy.visit('http://proof.ovh.net/files/')
        cy.downloadFile(
            'https://proof.ovh.net/files/100Mb.dat',
            'mydownloads',
            '100Mio.dat',
            'MyAgent'
        )
    })
    it('Small Size test', () => {
        cy.downloadFile(
            'https://proof.ovh.net/files/10Mb.dat',
            'mydownloads',
            '10Mio.dat'
        )
    })
    it('PDF test', () => {
        cy.downloadFile(
            'https://pdfobject.com/pdf/sample.pdf',
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


