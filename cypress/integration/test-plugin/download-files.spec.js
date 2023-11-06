/// <reference types="cypress" />

describe('Cypress Downloadfile Testing', () => {
    it('Large Size file', () => {
        cy.downloadFile(
            'http://212.183.159.230/512MB.zip',
            'mydownloads',
            '512MB.zip',
            "MyAgent",
            { timeout: 600000 }
        )
    })
    it('Medium Size file', () => {
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


