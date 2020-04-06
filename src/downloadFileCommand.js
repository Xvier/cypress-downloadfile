Cypress.Commands.add('downloadFile', (url, dir, fileName, headers) => {
    return cy.getCookies().then(cookies => {
        headers = headers || {}
        return cy.task('downloadFile', {
            url: url,
            directory: dir,
            cookies: cookies,
            fileName: fileName,
            headers: headers,
        })
    })
})
