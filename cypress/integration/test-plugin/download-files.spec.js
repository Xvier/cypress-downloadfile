/// <reference types="cypress" />

function createdFileSize(path, action) {
    cy.task('rm', path)
    action()
    return cy.task('fileSize', path).should('be.gt', 0)
}

describe('Cypress Downloadfile Testing', () => {
    it('Medium Size file', () => {
        cy.visit('http://ovh.net/files/')
        createdFileSize('mydownloads/100Mio.dat', () =>
            cy.downloadFile(
                'http://ovh.net/files/100Mio.dat',
                'mydownloads',
                '100Mio.dat',
                'MyAgent'
            )
        ).should('eq', 100 * 2**20)
    })
    it('Small Size test', () => {
        createdFileSize('mydownloads/10Mio.dat', () =>
            cy.downloadFile(
                'http://ovh.net/files/10Mio.dat',
                'mydownloads',
                '10Mio.dat'
            )
        ).should('eq', 10 * 2**20)
    })
    it('PDF test', () => {
        createdFileSize('mydownloads/sample.pdf', () =>
            cy.downloadFile(
                'http://www.africau.edu/images/default/sample.pdf',
                'mydownloads',
                'sample.pdf'
            )
        )
    })
    it('Image Size test', () => {
        createdFileSize('mydownloads/example.jpg', () =>
            cy.downloadFile(
                'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
                'mydownloads',
                'example.jpg'
            )
        )
    })
})


