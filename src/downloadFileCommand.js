Cypress.Commands.add('downloadFile', (url, dir, fileName, userAgent) => {
    return cy.getCookies().then(cookies => {
        return cy.task('downloadFile', {
            url: url,
            directory: dir,
            cookies: cookies,
            fileName: fileName,
            userAgent: userAgent,
        })
    })
})
