Cypress.Commands.add('downloadFile', function (url, dir, fileName, userAgent) {
  return cy.getCookies().then(function (cookies) {
    return cy.task('downloadFile', {
      url: url,
      directory: dir || "cypress/downloads",
      cookies: cookies,
      fileName: fileName || url.split("/").pop(),
      userAgent: userAgent
    });
  });
});