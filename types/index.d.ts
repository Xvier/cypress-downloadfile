/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Command to download files with Cypress plugin
       * @example
       * cy.downloadFile('http://demourl','example','demo.pdf')
       */
      downloadFile(url: string, directory: string, filename:string, userAgent?:string): Chainable<any>
    }
  }