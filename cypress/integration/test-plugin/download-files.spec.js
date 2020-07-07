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
    it('Defaults to the Content-Disposition attachment filename', () => {
        createdFileSize('mydownloads/Universal_Declaration_of_Human_Rights.pdf', () =>
            cy.downloadFile(
                'https://en.wikisource.org/api/rest_v1/page/pdf/Universal_Declaration_of_Human_Rights',
                'mydownloads',
            )
        )
    })
    it('Defaults to the last url path segment when there is no Content-Disposition attachment filename', () => {
        createdFileSize('mydownloads/Wikipedia-logo-v2.png', () =>
            cy.downloadFile(
                'https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
                'mydownloads',
            )
        )
    })
})


